const dialog = {};

dialog.install = function (Vue) {
  /**
	 * 알림창 표시
	 * @param {*} title
	 * @param {*} text
	 */
  Vue.prototype.alertDialog = function (title, text) {
    const res = this.$dialog.confirm({
      title,
      text,
      persistent: true,
      actions: {
        true: {
          color: 'red',
          text: 'Yes',
        },
      },
    });

    return res;
  };
  /**
	 * 확인창 표시
	 * @param {*} title
	 * @param {*} text
	 */
  Vue.prototype.confirmDialog = function (title, text) {
    const res = this.$dialog.confirm({
      title,
      text,
      persistent: true,
      actions: {
        false: 'No',
        true: {
          color: 'red',
          text: 'Yes',
        },
      },
    });

    return res;
  };
  /**
	 * 입력창 표시
	 * @param {*} title
	 * @param {*} text
	 * @param {*} content
	 */
  Vue.prototype.promptDialog = function (title, text, content) {
    const res = this.$dialog.prompt({
      title,
      text,
      value: content,
      persistent: true,
    });

    return res;
  };
  /**
	 * 선택창 표시
	 * @param {*} title
	 * @param {*} text
	 * @param {*} elementId
	 */
  Vue.prototype.selectDialog = function (title, text, elementId) {
    const res = this.$dialog.confirm({
      title,
      text,
      target: document.getElementById(`${elementId}`),
      persistent: true,
      closeOnEscape: false,
      actions: {
        true: {
          color: 'green',
          text: '이동',
        },
        false: {
          color: 'red',
          text: '방역',
        },
      },
    });

    return res;
  };
};

export default dialog;
