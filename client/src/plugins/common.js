const common = {};

common.install = function (Vue) {
  /**
	 * 휴대전화 번호 체크 정규식
	 * @param {*} value
	 */
  Vue.prototype.checkCellPhoneNumber = function (value) {
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regex.test(value) === true) return true;
    false;
  };

  /**
	 * 전화 번호 체크 정규식
	 * @param {*} value
	 */
  Vue.prototype.checkPhoneNumber = function (value) {
    const regex = /^([0-9]{2,3})-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regex.test(value) === true) return true;
    false;
  };

  /**
	 * 전화번호 자동 입력
	 * @param {*} value
	 */
  Vue.prototype.getMask = function (value) {
    if (!value) return value;
    value = value.replace(/[^0-9]/g, '');

    let res = '';
    if (value.length < 3) {
      res = value;
    } else if (value.substr(0, 2) == '02') {
      if (value.length <= 5) {
        // 02-123-5678
        res = `${value.substr(0, 2)}-${value.substr(2, 3)}`;
      } else if (value.length > 5 && value.length <= 9) {
        // 02-123-5678
        res =						`${value.substr(0, 2)
						 }-${
						 value.substr(2, 3)
						 }-${
						 value.substr(5)}`;
      } else if (value.length > 9) {
        // 02-1234-5678
        res =						`${value.substr(0, 2)
						 }-${
						 value.substr(2, 4)
						 }-${
						 value.substr(6)}`;
      }
    } else if (value.length < 8) {
      res = value;
    } else if (value.length == 8) {
      res = `${value.substr(0, 4)}-${value.substr(4)}`;
    } else if (value.length == 9) {
      res =						`${value.substr(0, 3)
						 }-${
						 value.substr(3, 3)
						 }-${
						 value.substr(6)}`;
    } else if (value.length == 10) {
      res =						`${value.substr(0, 3)
						 }-${
						 value.substr(3, 3)
						 }-${
						 value.substr(6)}`;
    } else if (value.length > 10) {
      // 010-1234-5678
      res =						`${value.substr(0, 3)
						 }-${
						 value.substr(3, 4)
						 }-${
						 value.substr(7)}`;
    }

    return res;
  };

  /**
	 * 휴대전화번호 자동 입력
	 * @param {*} value
	 */
  Vue.prototype.getCellMask = function (value) {
    if (!value) return value;
    value = value.replace(/[^0-9]/g, '');

    let res = '';
    if (value.length == 1) {
      if (value == '0') res = value;
    } else if (value.length >= 2) {
      if (value.substr(0, 2) == '01') {
        if (value.length < 3) {
          res = value;
        } else if (value.length < 8) {
          res = value;
        } else if (value.length == 8) {
          res = `${value.substr(0, 4)}-${value.substr(4)}`;
        } else if (value.length == 9) {
          res =							`${value.substr(0, 3)
							 }-${
							 value.substr(3, 3)
							 }-${
							 value.substr(6)}`;
        } else if (value.length == 10) {
          res =							`${value.substr(0, 3)
							 }-${
							 value.substr(3, 3)
							 }-${
							 value.substr(6)}`;
        } else if (value.length > 10) {
          // 010-1234-5678
          res =							`${value.substr(0, 3)
							 }-${
							 value.substr(3, 4)
							 }-${
							 value.substr(7)}`;
        }
      } else res = '0';
    }

    return res;
  };

  /**
	 * 이메일 체크 정규식
	 * @param {*} value
	 */
  Vue.prototype.checkEmailaddress = function (value) {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    if (regex.test(value) === true) return true;
    false;
  };

  Vue.prototype.fillZeroPad = function (num, width) {
    const n = `${num}`;
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n; // 남는 길이만큼 0으로 채움
  };
};

export default common;
