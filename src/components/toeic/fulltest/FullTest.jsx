import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem
} from '@coreui/react'

import routes from '../../../containers/routes'
import '../../../scss/style.scss'
const slides = [1, 2, 3, 4, 5, 6]

const FullTest = () => {
  return (
    <CContainer>
      <CContainer className="containertoeic">
        <CRow className="row rowtoeic-contend m-2">
          <CContainer className="testfullwrap">
            <CCol lg="5" className="testfullwrapinner testfullwrap_one">
              <span className="testfullonetwo testfull-one">TEST FULL</span>
              <span className="testfullonetwo testfull-two">
                LISTENING + READING
              </span>
            </CCol>
            <CCol lg="5" className="testfullwrapinner testfullwrap-two">
              <span className="testfullonetwo testfull-one">
                KIỂM TRA ĐẦY ĐỦ
              </span>
              <span className="testfullonetwo testfull-two">NGHE + ĐỌC</span>
            </CCol>
          </CContainer>
        </CRow>
        <CRow className="row rowtoeic-exam">
          <CCarousel animate autoSlide={2000}>
            <CCarouselInner>
              <CRow>
                <CCarouselItem>
                  <CRow className="inner-carousel">
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[0]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[0]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[0]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCarouselItem>
                <CCarouselItem>
                  <CRow className="inner-carousel">
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[1]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[1]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[1]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCarouselItem>
                <CCarouselItem>
                  <CRow className="inner-carousel">
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[2]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[2]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[2]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCarouselItem>
              </CRow>
            </CCarouselInner>
            <CCarouselControl direction="prev" />
            <CCarouselControl direction="next" />
          </CCarousel>
        </CRow>
      </CContainer>
      <CContainer className="shadow p-5 mb-5 bg-white rounded context">
        <h3 className="header-context">
          Hướng dẫn làm đề thi thử TOEIC online
        </h3>
        <p>
          TOEIC là viết tắt của Test of English for International Communication
          – Bài kiểm tra tiếng Anh giao tiếp quốc tế. Ở Việt Nam hiện nay, chứng
          chỉ TOEIC được sử dụng rất phổ biến để đánh giá trình độ thông thạo
          tiếng Anh của người lao động mà rất nhiều doanh nghiệp đang lựa chọn.
          Ngoài ra, rất nhiều trường học đại học tại Việt Nam cũng đang dùng
          TOEIC làm chuẩn đầu ra tiếng Anh với sinh viên.
        </p>
        <p>
          Vì thế, để trợ giúp cho các bạn trong quá trình luyện thi TOEIC một
          cách hiệu quả nhất, chúng tôi cung cấp các đề thi thử TOEIC online
          miễn phí có chấm điểm và đáp án. Đặc biệt, những đề thi thử tại đây
          được làm theo format mới và lấy từ chính đề thi thật tại phòng thi
          TOEIC của IIG Việt Nam, giúp các bạn dễ dàng làm quen và đánh giá
          trình độ Toeic một cách chính xác nhất. Đặc biệt bạn không cần phải
          đăng ký để thi TOEIC vì mọi thứ đều miễn phí.
        </p>
        <p className="header">
          Giới thiệu về đề thi thử TOEIC chuẩn trên trang web
        </p>
        <p>Hiện tại hệ thống đề của chúng tôi có đề thi thử đầy đủ:</p>
        <p>
          - Đề thi đầy đủ (Test full): Đây là dạng đề thi TOEIC chuẩn theo
          format mới của đề TOEIC 2 kỹ năng hiện nay của IIG gồm 200 câu hỏi,
          được chia làm 7 part và chia đều mỗi phần nghe và đọc 100 câu. Trong
          đó phần nghe (Listening) từ part 1 đến part 4 được làm trong 45 phút,
          phần đọc (Reading) sẽ từ part 5 đến part 7 làm trong 75 phút. Khi làm
          đề thi đầy đủ bạn phải hoàn thành trình tự bài thi TOEIC online giống
          như trên phòng thi TOEIC thật của IIG, tức là làm hết phần Listening
          trong 45 phút sau đó mới được làm Reading. Ở phần Reading thì các bạn
          có thể tùy ý chọn câu hỏi để làm trước theo ý muốn. Các bạn nên cố
          gắng làm bài thi thật kỹ trong vòng 2h và coi như đang làm bài thi
          thật để có thể đánh giá chính xác nhất năng lực của bản thân. Đề thi
          đầy đủ sẽ liên tục được cập nhật từ phòng thi của IIG cho các bạn ôn
          tập và luyện thi TOEIC.
        </p>

        <h5 className="header">Cấu trúc một đề thi TOEIC chuẩn bạn cần nhớ:</h5>
        <img src="public\image\Capture.PNG" alt="Cấu trúc đề thi TOEIC"></img>
        <h5>Phần nghe (Listening)</h5>
        <p>
          Part 1: Gồm 6 câu hỏi mô tả hình ảnh: Bạn sẽ xem 1 bức hình và nghe mô
          tả qua 4 đáp án A, B, C, D, hãy chọn đáp án mô tả chính xác nhất.
        </p>
        <p>
          Part 2: Gồm 25 câu hỏi đáp: Bạn sẽ được nghe 1 câu hỏi và 3 câu trả
          lời A, B, C, hãy chọn đáp án đúng nhất cho câu hỏi.
        </p>
        <p>
          Part 3: Gồm 39 câu hỏi hội thoại: Bạn sẽ được nghe một đoạn hội thoại
          để trả lời cho 3 câu hỏi có 4 đáp án khác nhau. Sau khi nghe đoạn hội
          thoại, hãy đọc câu hỏi và đáp án để chọn đáp án phù hợp nhất.
        </p>
        <p>
          Part 4: Gồm 30 câu độc thoại: Tương tự như part 3 bạn cũng cần nghe 1
          đoạn đọc thoại để trả lời cho 3 câu hỏi được viết trên đề.
        </p>
        <p className="attention">
          * Lưu ý: Khoảng cách giữa mỗi câu hỏi ở phần thi nghe sẽ được cách
          nhau 5s để các bạn lựa chọn đáp án đúng, hãy cố gắng chọn một đáp án
          bạn cho là phù hợp nhất trong 5s nhé.
        </p>
        <h5>Phần đọc (Reading)</h5>
        <p>
          Part 5: Gồm 30 câu hỏi: Part 5 yêu câu bạn phải chọn đáp án đúng nhất
          để hoàn thành một câu không hoàn chỉnh.
        </p>
        <p>
          Part 6: Gồm 16 câu hỏi: Ở phần này sẽ có 4 đoạn văn, mỗi đoạn bị
          khuyết 4 chỗ tương ứng với 4 câu hỏi cho mỗi đoạn. Bạn cần chọn đáp án
          đúng nhất để hoàn thành đoạn văn đó.
        </p>
        <p>
          Part 7: Gồm 54 câu hỏi: Ở phần này bạn cần đọc hiểu đoạn văn để trả
          lời những câu hỏi tương ứng của từng đoạn.
        </p>
        <h5 className="header">
          Một số lưu ý khi làm bài thi thử TOEIC miễn phí
        </h5>
        <ul>
          <li>
            Làm bài thi trên máy tính hay laptop để đạt hiệu quả tốt nhất.{' '}
          </li>
          <li>Làm đúng theo thời gian quy định của đề thi. </li>
          <li>
            Làm bài thi nghiêm túc, không nên khoanh bừa đáp án nếu không biết
            lý do.
          </li>
          <li>Tạo môi trường giống thi thật nhất có thể. </li>
          <li>Không bỏ dở bài thi giữa chừng. </li>
          <li>Tập trung luyện tập tốt cả 2 kỹ năng Listening hay Reading </li>
          <li>Tìm hiểu các câu sai để từ đó rút kinh nghiệm khi thi TOEIC </li>
        </ul>
        <p>&gt;&gt; Xem thêm tin liên quan:</p>
        <ul>
          <li><a href="http://www.iigvietnam.com/vi/tin-tuc-su-kien/tin-tuc-su-kien/2283-huong-dan-du-thi-toeic-cap-nhat.html">Hướng dẫn thủ tục và địa điểm đăng ký thi TOEIC chi tiết</a></li>
        <li><a href="https://www.tienganhcaptoc.vn/wp-content/uploads/2020/08/thang-diem-toeic-1.jpg">Thang điểm TOEIC mới nhất để tính điểm TOEIC</a></li>
        </ul>
      </CContainer>
    </CContainer>
  )
}

export default FullTest
