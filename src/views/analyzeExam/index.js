import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { format } from 'date-fns';
import { axiosGet } from '../../share/axios';
import { useSelector } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const getDaysInMonth = (month, year) => {
  let date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    const fomatedDate = format(new Date(date), 'dd/MM/yy');
    days.push(fomatedDate);
    date.setDate(date.getDate() + 1);
  }

  return days;
};

const makeLabe = (month, year) => {
  const test = getDaysInMonth(month - 1, year);
  return test;
};

const AnalyzeExam = () => {
  const accountLogin = useSelector(state => state.authentication.loginState);
  const { email } = accountLogin;
  const [dataPieChartReading, setDataPieChartReading] = useState({});
  const [dataPieChartListening, setDataPieChartListening] = useState({});
  const [data, setData] = useState({});

  const [dataColumnChart, setDataColumnChart] = useState(null);
  const [filter, setfilter] = useState(null);
  const [sumScore, setSumScore] = useState(null);

  const queryData = async () => {
    console.log('filter', filter);
    let date = new Date();
    console.log('date', date);

    const analyzeModel = {
      url: `http://localhost:9999/api/recordHistory/analyze`,
      email: email,
      dateTime: filter
    };
    const res = await axiosGet(analyzeModel);
    return res.data;
  };
  /* useEffect(() => {
    let cancelled = false;
    (async () => {
      console.log('filter', filter);
      let date = new Date();
      console.log('date', date);

      const analyzeModel = {
        url: `http://localhost:9999/api/recordHistory/analyze`,
        email: email,
        dateTime: filter
      };
      axiosGet(analyzeModel);
    })();
    return () => {
      cancelled = true;
    };
  }, [email, filter, sumScore]); */

  const changeAnalyzeTimes = async (month, year) => {
    const { labelDate, values } = await queryData();
    const columnChar = {
      labels: labelDate,
      datasets: [
        {
          label: 'Điểm trung bình',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: values,
          barPercentage: 0.8,
          categoryPercentage: 0.5
        }
      ]
    };
    const readScore = Math.floor(Math.random() * 400) + 50;
    const pieReadChar = {
      labels: ['Điểm đọc'],
      datasets: [
        {
          data: [readScore, 495 - readScore],
          backgroundColor: ['#33abe5', '#D3D3D3'],
          hoverBackgroundColor: ['#33abe5', '#D3D3D3']
        }
      ]
    };
    const listenScore = Math.floor(Math.random() * 400) + 50;
    const pieLisChar = {
      labels: ['Điểm nghe'],
      datasets: [
        {
          data: [listenScore, 495 - listenScore],
          backgroundColor: ['#33abe5', '#D3D3D3'],
          hoverBackgroundColor: ['#33abe5', '#D3D3D3']
        }
      ]
    };
    console.log('columnChar', columnChar);

    return {
      pieReadChar,
      pieLisChar,
      columnChar,
      sumScore: readScore + listenScore
    };
  };

  const handleChange = async filter => {
    setfilter(filter);
    const {
      pieReadChar,
      pieLisChar,
      columnChar,
      sumScore
    } = await changeAnalyzeTimes(filter.getMonth() + 1, filter.getYear());
    setSumScore(sumScore);
    setDataColumnChart(columnChar);
    setDataPieChartListening(pieLisChar);
    setDataPieChartReading(pieReadChar);
  };

  return (
    <div>
      <div className='analyze-filter'>
        <h3>Filer: </h3>
        <DayPickerInput onDayChange={handleChange} />
      </div>

      {dataColumnChart && (
        <div className='analyze-times'>
          <div className='title'>
            Thống kê lượt làm bài tháng:
            <span className='highlight'>{filter ? filter.label : null}</span>
          </div>
          <Bar
            data={dataColumnChart}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      )}
    </div>
  );
};


export default AnalyzeExam;
