import { LightningElement } from 'lwc';

export default class ChildToParentParent extends LightningElement {
    age;
    handleAgeChange(event)
    {
        this.age = event.detail.age;
    }
}