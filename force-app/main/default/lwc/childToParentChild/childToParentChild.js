import { LightningElement } from 'lwc';

export default class ChildToParentChild extends LightningElement {

    changeAgeHandler(event)
    {
        const selectEvent = new CustomEvent(
            'myevent',
            {detail : {age: event.target.value}}
        );
        this.dispatchEvent(selectEvent);
    }
}