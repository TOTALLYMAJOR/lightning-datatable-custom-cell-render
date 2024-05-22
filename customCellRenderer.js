import { LightningElement, api } from 'lwc';

export default class CustomCellRenderer extends LightningElement {
    @api value;
    @api row;
    @api column;

    get isEditable() {
        return this.row.Status !== 'processed';
    }
}
