(function () {
  //Add all require events
  function addEvents() {
    $("#person").submit(validateForm);
  }

  function validateForm(e) {
    //Prevent overloading
    e.preventDefault();
    //Sex, birth, email validate in html. Address can be what u want
    var name = $("#name").val();
    var sex = $("#sex").val();
    var date = $("#birth").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    if (!(/^[a-zA-Z]+$/.test(name))) {
      alert("Not correct name");
      return;
    }

    if (!(/^[0-9\-\+]{9,15}$/.test(phone))) {
      alert("Not correct phone");
      return;
    }


  }

  //superclass
  function SuperUser() {
    this._isDataVisible = true;
  }

  SuperUser.prototype.changeDataVisible = function () {
    this._isDataVisible = !this._isDataVisible;
  }

  //class
  function User(name, sex, birth, address, phone, email) {

    SuperUser.call(this);

    this._name = name;
    this._sex = sex;
    this._birth = birth;
    this._address = address;
    this._phone = phone;
    this._email = email;
  }

  //inherit
  User.prototype = Object.create(SuperUser.prototype);
  User.prototype.constructor = User;

  User.prototype.getName = function () {
    return this._name;
  }

  User.prototype.getSex = function () {
    return this._sex;
  }

  User.prototype.geBirth = function () {
    return this._birth;
  }

  User.prototype.getAddress = function () {
    return this._address;
  }

  User.prototype.getPhone = function () {
    return this._phone;
  }

  User.prototype.getEmail = function () {
    return this._email;
  }

  function Table() {
    this._table = null;
    this._users = null;

    this.init();
  }

  Table.prototype.init = function () {
    //Place where will add new person
    this._table = $("#person-table tbody");
    this._users = [];
  }

  Table.prototype.addNewPerson = function (name, sex, birth, address, phone, email) {
    var newPerson = new User(name, sex, birth, address, phone, email);

    this._users.push(newPerson);
    console.log(this._users);

    this.renderTable(newPerson);
  }

  Table.prototype.renderTable = function (newPerson) {
    var newRow = createRow();
    this._table.append(newRow);

    function createRow() {
      var newRow = $("<tr></tr>");
      newRow.append($("<td></td>").text(newPerson.getName()));
      newRow.append($("<td></td>").text(newPerson.getSex()));
      newRow.append($("<td></td>").text(newPerson.getBirth()));
      newRow.append($("<td></td>").text(newPerson.getAddress()));
      newRow.append($("<td></td>").text(newPerson.getPhone()));
      newRow.append($("<td></td>").text(newPerson.getEmail()));

      return newRow;
    }
  }

  var table = new Table;
  addEvents();
})();