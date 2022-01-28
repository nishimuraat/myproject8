import { LightningElement } from 'lwc';

export default class ParentToChildParent extends LightningElement {
    age = 18;
    name;
    changeAgeHandler(event)
    {
        this.age = event.target.value;
    }

    changeNameFixedHandler()
    {
        this.template.querySelector('c-Parent-to-child-child').changeNameFixed();
    }

    changeNameHandler()
    {
        this.template.querySelector('c-Parent-to-child-child').changeName('三郎');
    }

    hisNameHandler()
    {
        this.name = this.template.querySelector('c-Parent-to-child-child').hisName();
    }
}