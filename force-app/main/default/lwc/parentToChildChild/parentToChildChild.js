import { LightningElement, api } from 'lwc';

export default class ParentToChildChild extends LightningElement {

    @api age;
    name = '一郎';

    @api
    changeNameFixed(){
        this.name = '二郎'
    }

    @api
    changeName(name){
        this.name = name;
    }

    @api
    hisName() {
        return this.name + 'さんです';
    }
}