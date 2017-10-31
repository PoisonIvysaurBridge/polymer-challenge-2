/**
 * Created by Ivy on 10/30/17.
 */

var sharedInstance = null;

class DescriptionHolder {

    constructor() {
        this._data = [];
        sharedInstance = this;
    }

    static getInstance() {
        if(sharedInstance == null) {
            sharedInstance = new PersonNamesHolder();
        }

        return sharedInstance;
    }

    setSelectorMenu(selectorMenu, ironPageMenu) {
        this._selectorMenu = selectorMenu;
        this._ironPageMenu = ironPageMenu;
    }

    setRefresher(refresher, caller) {
        this._refresher = refresher;
        this._caller = caller;
    }

    callRefresh() {
        if(this._refresher != null && this._caller != null) {
            this._refresher(this._caller);
        }
    }

    add(person) {
        this._data.push(person);

        var buttonElement = document.createElement('a');
        buttonElement.innerHTML = person.getLastName();

        var index = PersonNamesHolder.getInstance().getDataLength() - 1;
        buttonElement.href = "person-view?index=" +index;
        this._selectorMenu.appendChild(buttonElement)
    }

    get(index) {
        return this._data[index];
    }

    getDataLength() {
        return this._data.length;
    }
}
