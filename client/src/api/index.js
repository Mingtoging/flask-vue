import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.162:8090/',
});

/**
 * 게시글 목록 조회
 * @param {*} params
 */
function getBoardListAPI(params) {
  return instance.get('/board/list.do', params);
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI(params) {
  return instance.get('/board/detail.do', params);
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI(params) {
  return instance.post('/board/insert.do', null, params);
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI(params) {
  return instance.post('/board/update.do', null, params);
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI(params) {
  return instance.post('/board/delete.do', null, params);
}

/**
 * 댓글 작성
 * @param {*} params
 */
function insertReplyAPI(params) {
  return instance.post('/board/reply/insert.do', null, params);
}

/**
 * 댓글 조회
 * @param {*} params
 */
function getReplyListAPI(params) {
  return instance.get('/board/reply/list.do', params);
}

/**
 * 댓글 수정
 * @param {*} params
 */
function updateReplyAPI(params) {
  return instance.post('/board/reply/update.do', null, params);
}

/**
 * 댓글 삭제
 * @param {*} params
 */
function deleteReplyAPI(params) {
  return instance.post('/board/reply/delete.do', null, params);
}

/**
 * 로그인
 * @param {*} params
 */
function actionLoginAPI(params) {
  return instance.post('/uat/uia/actionLoginAPI.do', null, params);
}

/**
 * 로그아웃
 * @param {*} params
 */
function actionLogoutAPI(params) {
  return instance.post('/uat/uia/actionLogoutAPI.do', null, params);
}

/**
 * 탑메뉴 로드
 * @param {*} params
 */
function setTopMenuAPI(params) {
  return instance.post('/menu/setTopMenuAPI.do', null, params);
}

/**
 * 공통코드 목록 조회
 * @param {*} params
 */
function getCodeListAPI(params) {
  return instance.get('/cmmn/code/list.do', params);
}

/**
 * 공통코드 작성
 * @param {*} params
 */
function insertCodeAPI(params) {
  return instance.post('/cmmn/code/insert.do', null, params);
}

/**
 * 공통코드 상세 조회
 * @param {*} params
 */
function getCodeDetailAPI(params) {
  return instance.get('/cmmn/code/detail.do', params);
}

/**
 * 공통코드 삭제
 * @param {*} params
 */
function deleteCodeAPI(params) {
  return instance.post('/cmmn/code/delete.do', null, params);
}

/**
 * 공통코드 수정
 * @param {*} params
 */
function updateCodeAPI(params) {
  return instance.post('/cmmn/code/update.do', null, params);
}

/**
 * 공통상세코드 목록 조회
 * @param {*} params
 */
function getDetailCodeListAPI(params) {
  return instance.get('/cmmn/detailcode/list.do', params);
}

/**
 * 공통상세코드 작성
 * @param {*} params
 */
function insertDetailCodeAPI(params) {
  return instance.post('/cmmn/detailcode/insert.do', null, params);
}

/**
 * 공통상세코드 상세 조회
 * @param {*} params
 */
function getDetailCodeDetailAPI(params) {
  return instance.get('/cmmn/detailcode/detail.do', params);
}

/**
 * 공통상세코드 삭제
 * @param {*} params
 */
function deleteDetailCodeAPI(params) {
  return instance.post('/cmmn/detailcode/delete.do', null, params);
}

/**
 * 공통상세코드 수정
 * @param {*} params
 */
function updateDetailCodeAPI(params) {
  return instance.post('/cmmn/detailcode/update.do', null, params);
}

/**
 * 메뉴 목록 조회
 * @param {*} params
 */
function getMenuManageListAPI(params) {
  return instance.get('/mng/menu/list.do', params);
}

/**
 * 메뉴 작성
 * @param {*} params
 */
function insertMenuManageAPI(params) {
  return instance.post('/mng/menu/insert.do', null, params);
}

/**
 * 메뉴 상세 조회
 * @param {*} params
 */
function getMenuManageDetailAPI(params) {
  return instance.get('/mng/menu/detail.do', params);
}

/**
 * 메뉴 삭제
 * @param {*} params
 */
function deleteMenuManageAPI(params) {
  return instance.post('/mng/menu/delete.do', null, params);
}

/**
 * 메뉴 수정
 * @param {*} params
 */
function updateMenuManageAPI(params) {
  return instance.post('/mng/menu/update.do', null, params);
}

/**
 * 개인 메뉴 목록 조회
 * @param {*} params
 */
function getMyMenuListAPI(params) {
  return instance.get('/mng/menu/myMenuList.do', params);
}

/**
 * 사용자 목록 조회
 * @param {*} params
 */
function getUserManageListAPI(params) {
  return instance.get('/mng/usr/list.do', params);
}

/**
 * 사용자 작성
 * @param {*} params
 */
function insertUserManageAPI(params) {
  return instance.post('/mng/usr/insert.do', null, params);
}

/**
 * 사용자 상세 조회
 * @param {*} params
 */
function getUserManageDetailAPI(params) {
  return instance.get('/mng/usr/detail.do', params);
}

/**
 * 사용자 삭제
 * @param {*} params
 */
function deleteUserManageAPI(params) {
  return instance.post('/mng/usr/delete.do', null, params);
}

/**
 * 사용자 수정
 * @param {*} params
 */
function updateUserManageAPI(params) {
  return instance.post('/mng/usr/update.do', null, params);
}

/**
 * 패스워드 변경
 * @param {*} params
 */
function updatePasswordAPI(params) {
  return instance.post('/mng/usr/updatePassword.do', null, params);
}

/**
 * 셀렉트박스 itemList 조회
 * @param {*} params
 */
function getItemListAPI(params) {
  return instance.get('/cmmn/detailcode/itemList.do', params);
}

/**
 * 메뉴권한 조회
 * @param {*} params
 */
function getMenuPermissionListAPI(params) {
  return instance.get('/mng/menu/permissionList.do', params);
}

/**
 * 메뉴권한 변경
 * @param {*} params
 */
function updatePermissionAPI(params) {
  return instance.post('/mng/menu/updatePermission.do', null, params);
}

/**
 * 로봇 정보 목록 조회
 * @param {*} params
 */
function getRobotManageListAPI(params) {
  return instance.get('/mng/rbt/list.do', params);
}

/**
 * 로봇 정보 작성
 * @param {*} params
 */
function insertRobotManageAPI(params) {
  return instance.post('/mng/rbt/insert.do', null, params);
}

/**
 * 로봇 정보 상세 조회
 * @param {*} params
 */
function getRobotManageDetailAPI(params) {
  return instance.get('/mng/rbt/detail.do', params);
}

/**
 * 로봇 정보 삭제
 * @param {*} params
 */
function deleteRobotManageAPI(params) {
  return instance.post('/mng/rbt/delete.do', null, params);
}

/**
 * 로봇 정보 수정
 * @param {*} params
 */
function updateRobotManageAPI(params) {
  return instance.post('/mng/rbt/update.do', null, params);
}

/**
 * 로봇권한 조회
 * @param {*} params
 */
function getRobotPermissionListAPI(params) {
  return instance.get('/mng/rbt/permissionList.do', params);
}

/**
 * 로봇권한 변경
 * @param {*} params
 */
function updateRobotPermissionAPI(params) {
  return instance.post('/mng/rbt/updatePermission.do', null, params);
}

/**
 * 내 로봇 목록 조회
 * @param {*} params
 */
function getMyRobotListAPI(params) {
  return instance.get('/mng/rbt/myList.do', params);
}

/**
 * TTS 미리듣기 생성
 * @param {*} params
 */
function insertTempTTSAPI(params) {
  return instance.post('/tts/insertTemp.do', null, params);
}

/**
 * TTS 생성
 * @param {*} params
 */
function insertTTSAPI(params) {
  return instance.post('/tts/insert.do', null, params);
}

/**
 * TTS 목록 조회
 * @param {*} params
 */
function getTTSListAPI(params) {
  return instance.get('/tts/list.do', params);
}

/**
 * TTS 삭제
 * @param {*} params
 */
function deleteTTSAPI(params) {
  return instance.post('/tts/delete.do', null, params);
}

/**
 * 선택 TTS 삭제
 * @param {*} params
 */
function checkedDeleteTTSAPI(params) {
  return instance.post('/tts/checkedDelete.do', null, params);
}

/**
 * 모션 정보 목록 조회
 * @param {*} params
 */
function getMotionManageListAPI(params) {
  return instance.get('/motion/list.do', params);
}

/**
 * 모션 정보 작성
 * @param {*} params
 */
function insertMotionManageAPI(params) {
  return instance.post('/motion/insert.do', null, params);
}

/**
 * 모션 정보 상세 조회
 * @param {*} params
 */
function getMotionManageDetailAPI(params) {
  return instance.get('/motion/detail.do', params);
}

/**
 * 모션 정보 삭제
 * @param {*} params
 */
function deleteMotionManageAPI(params) {
  return instance.post('/motion/delete.do', null, params);
}

/**
 * 모션 정보 수정
 * @param {*} params
 */
function updateMotionManageAPI(params) {
  return instance.post('/motion/update.do', null, params);
}

/**
 * 모션 파일 등록
 * @param {*} params
 */
function insertMotionFileManageAPI(params) {
  const formdata = new FormData();
  console.log(`params : ${params}`);
  console.log(`data : ${params.params}`);
  formdata.append('moduleType', params.params.moduleType);
  formdata.append('filePlayTime', params.params.filePlayTime);
  formdata.append('userUniqueId', params.params.userUniqueId);

  // if (params.motionFile.length > -1) {
  // 	for (let i = 0; i < params.params.motionFile.length; i++) {
  const fileForm = params.params.motionFile;
  formdata.append('motionFile', fileForm);
  // 	}
  // }
  const result = axios({
    method: 'post',
    url: 'http://192.168.1.162:8090/motion/insertFile.do',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formdata,
  });
  console.log(`insertMotionFile.result : ${result}`);
  return result;
  // return instance.post('/motion/insertFile.do', null, params)
}

/**
 * 음성모션 정보 목록 조회
 * @param {*} params
 */
function getActionManageListAPI(params) {
  return instance.get('/action/list.do', params);
}

/**
 * 음성모션 XML 작성
 * @param {*} params
 */
function insertActionManageAPI(params) {
  return instance.post('/action/insert.do', null, params);
}

/**
 * 음성모션 정보 상세 조회
 * @param {*} params
 */
function getActionManageDetailAPI(params) {
  return instance.get('/action/detail.do', params);
}

/**
 * 음성모션 정보 삭제
 * @param {*} params
 */
function deleteActionManageAPI(params) {
  return instance.post('/action/delete.do', null, params);
}

/**
 * 음성모션 정보 수정
 * @param {*} params
 */
function updateActionManageAPI(params) {
  return instance.post('/action/update.do', null, params);
}

/**
 * 로봇 데이터 리스트 조회
 * @param {*} params
 */
function getMapDataListAPI(params) {
  return instance.get('/mnt/list.do', params);
}

/**
 * 로봇 데이터 상세 조회
 * @param {*} params
 */
function getRobotDataAPI(params) {
  return instance.get('/mnt/detail.do', params);
}

/**
 * 로봇 작업 장소 정보 작성
 * @param {*} params
 */
function savePointListAPI(params) {
  return instance.post('/mnt/savePoint.do', null, params);
}

/**
 * 로봇 작업 장소 정보 목록 조회
 * @param {*} params
 */
function getMapPointListAPI(params) {
  return instance.get('/mnt/pointlist.do', params);
}

export {
  getBoardListAPI,
  getBoardDetailAPI,
  insertBoardAPI,
  updateBoardAPI,
  deleteBoardAPI,
  insertReplyAPI,
  getReplyListAPI,
  updateReplyAPI,
  deleteReplyAPI,
  actionLoginAPI,
  actionLogoutAPI,
  setTopMenuAPI,
  getCodeListAPI,
  insertCodeAPI,
  getCodeDetailAPI,
  deleteCodeAPI,
  updateCodeAPI,
  getDetailCodeListAPI,
  insertDetailCodeAPI,
  getDetailCodeDetailAPI,
  deleteDetailCodeAPI,
  updateDetailCodeAPI,
  getMenuManageListAPI,
  insertMenuManageAPI,
  getMenuManageDetailAPI,
  deleteMenuManageAPI,
  updateMenuManageAPI,
  getMyMenuListAPI,
  getUserManageListAPI,
  insertUserManageAPI,
  getUserManageDetailAPI,
  deleteUserManageAPI,
  updateUserManageAPI,
  updatePasswordAPI,
  getItemListAPI,
  getMenuPermissionListAPI,
  updatePermissionAPI,
  getRobotManageListAPI,
  insertRobotManageAPI,
  getRobotManageDetailAPI,
  deleteRobotManageAPI,
  updateRobotManageAPI,
  getRobotPermissionListAPI,
  updateRobotPermissionAPI,
  getMyRobotListAPI,
  insertTempTTSAPI,
  insertTTSAPI,
  getTTSListAPI,
  deleteTTSAPI,
  checkedDeleteTTSAPI,
  getMotionManageListAPI,
  insertMotionManageAPI,
  getMotionManageDetailAPI,
  deleteMotionManageAPI,
  updateMotionManageAPI,
  insertMotionFileManageAPI,
  getActionManageListAPI,
  insertActionManageAPI,
  getActionManageDetailAPI,
  deleteActionManageAPI,
  updateActionManageAPI,
  getMapDataListAPI,
  getRobotDataAPI,
  savePointListAPI,
  getMapPointListAPI,
};
