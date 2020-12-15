import React, { Fragment, useEffect, useState } from 'react';
import { CCol, CRow, CContainer, CLink } from '@coreui/react';
import { mdiClockAlertOutline } from '@mdi/js';
import Icon from '@mdi/react';
import {
  getExamRequest,
  getExamsRequest
} from '../../../Store/slice/examSlide';
import { Link, Redirect } from 'react-router-dom';
import Exam from './Exam';
import { useDispatch, useSelector } from 'react-redux';

const Exams = () => {
  const { isLogin } = useSelector(state => state.authentication);
  const [islogin, setIsLogin] = useState(isLogin);
  const exams = useSelector(state => state.exam).exams;
  const dispatch = useDispatch();
  const filterModel = {
    url: 'http://localhost:9999/api/fullexam/'
  };
  console.log(islogin);
  useEffect(() => {
    if (islogin) {
      dispatch(getExamsRequest(filterModel));
    }
  }, [islogin]);
  return (
    <Fragment>
      <div className='fullTest-page'>
        <div className='fullTest-header '>
          <CRow>
            <CCol lg='7' className='fullTest-header-subject'>
              <div>Thi thử TOEIC</div>
              <div>Đề thi thật 2020</div>
            </CCol>
            <CCol md lg='5'>
              <img
                src='image/Capture.JPG'
                alt='advertise 1'
                loading='lazy'
                align='left'
                className='fullTest-image'
              />
            </CCol>
          </CRow>
        </div>
        <div className='fullTest-exams col-sm-12'>
          <div className='fullTest-exams-title'>
            Full Test - Thi thử đề thật{' '}
            <span className='fullTest-exams-title-child'>
              <Icon
                path={mdiClockAlertOutline}
                title='User Profile'
                size={1}
                horizontal
                vertical
                rotate={180}
                color='red'
                className='mr-2'
              />
              Thời lượng: 120 phút
            </span>
          </div>
          <CRow className='fullTest-exams-list'>
            <CCol lg='4' className='fullTest-exams-list-child'>
              {exams.map(exam => (
                <Exam key={exam._id} exam={exam} />
              ))}
            </CCol>
          </CRow>
          <div className='fullTest-exams-title'>
            Mini Test - Kiểm tra trình độ{' '}
            <span className='fullTest-exams-title-child'>
              <Icon
                path={mdiClockAlertOutline}
                title='User Profile'
                size={1}
                horizontal
                vertical
                rotate={180}
                color='red'
                className='mr-2'
              />
              Thời lượng: 30 phút{' '}
            </span>
          </div>
          <CRow className='fullTest-exams-list'>
            <CCol lg='4' className='fullTest-exams-list-child'>
              {exams.map(exam => (
                <Exam key={exam._id} exam={exam} />
              ))}
            </CCol>
          </CRow>
          <CRow className='fullTest-exams-point-content'>
            TOEIC - viết tắt của Test of English for International Communication
            (Bài kiểm tra tiếng Anh giao tiếp quốc tế) - là một chứng chỉ tiếng
            Anh quốc tế dành cho các quốc gia không sử dụng tiếng Anh như ngôn
            ngữ mẹ đẻ, đặc biệt là những đối tượng muốn sử dụng tiếng Anh trong
            môi trường giao tiếp và làm việc quốc tế. Kết quả của bài thi TOEIC
            phản ánh mức độ thành thạo khi sử dụng tiếng Anh trong các hoạt động
            công việc và đời sống. Chứng chỉ có thời hạn hiệu lực 02 năm, phù
            hợp cho các bạn đang cần chứng chỉ để tốt nghiệp, xin việc, hay đánh
            giá trình độ cá nhân.
            <br />
            <br />
            Bài thi TOEIC đầy đủ bao gồm TOEIC Listening (Thi nghe trong 45
            phút) và TOEIC Reading (Thi đọc trong 75 phút) với tổng cộng 200 câu
            hỏi. Bài thi được chia làm 7 phần nhỏ hơn với các loại câu hỏi khác
            nhau, đòi hỏi thí sinh phải rèn luyện các kĩ năng tương ứng để có
            thể đạt điểm số cao nhất. Với thời lượng thi dài và độ khó tương đối
            cao, nếu bạn bước vào phòng thi mà hoàn toàn chưa chuẩn bị kiến thức
            và kĩ năng, bạn sẽ rất khó để thể hiện được đúng năng lực của mình.
            Hãy tham khảo các bài viết sau để giữ vững tâm lý và tâm thế thật tự
            tin khi bước vào phòng thi nhé!
          </CRow>
        </div>
      </div>
    </Fragment>
  );
};

export default Exams;
