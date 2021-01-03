import React from 'react';

const home = React.lazy(() => import('../components/settings/fullexam/FullExams'));
const HomeExams = React.lazy(() => import('../components/settings/fullexam/HomeExams'));
const MiniExams = React.lazy(() => import('../components/settings/fullexam/MiniExams'));
const FullExams = React.lazy(() => import('../components/settings/fullexam/FullExams'));
const intro = React.lazy(() => import('../components/settings/fullexam/Intro'));
const doExam = React.lazy(() =>
  import('../components/settings/fullexam/DoExam')
);
// const profile = React.lazy(() =>
//   import('../components/settings/profile/Profile')
// );
const profile = React.lazy(() =>
  import('../components/settings/profile/Profile')
);
const ToeicScale = React.lazy(() =>
  import('../components/settings/ToeicScale')
);
const routes = [
  { path: '/', name: 'Trang chủ', component: HomeExams, exact: true },
  { path: '/miniTest', name: 'Đề thi 30 phút', component: MiniExams, exact: true },
  { path: '/fullTest', name: 'Đề thi 120 phút', component: FullExams, exact: true },
  {
    path: '/ThangDiemToeic',
    name: 'Thang điểm Toeic',
    component: ToeicScale,
    exact: true
  },
  {
    path: '/BauDauThi/:id',
    name: 'Bắt đầu thi',
    component: intro,
    exact: true
  },
  { path: '/ThongTinCaNhan', name: 'Thông tin cá nhân', component: profile },
  { path: '/doExam', name: 'Làm bài thi', component: doExam }
];
const routes2 = [];
export default routes;
