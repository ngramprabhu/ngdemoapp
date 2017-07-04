export class CustomEmailValidator{
    //1. Function accepts ctrl
    //ctrl is the control context to be validated
    static emailValidator(ctrl) {
    var regExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
       return { 'wrongEmail': true };
      }
    }
}