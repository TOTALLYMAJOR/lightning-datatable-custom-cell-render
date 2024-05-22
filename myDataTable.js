import { LightningElement, track, wire } from 'lwc';
import getRecords from '@salesforce/apex/MyApexController.getRecords';
import customCellRenderer from './customCellRenderer';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text', editable: true, typeAttributes: { customCellRenderer: true }},
    { label: 'Status', fieldName: 'Status', type: 'text' },
    // Add other columns as needed
];

export default class MyDataTable extends LightningElement {
    @track data = [];
    @track columns = COLUMNS.map(col => {
        if (col.typeAttributes && col.typeAttributes.customCellRenderer) {
            return {
                ...col,
                cellAttributes: {
                    class: { fieldName: 'statusClass' }
                }
            };
        }
        return col;
    });

    @wire(getRecords)
    wiredRecords({ error, data }) {
        if (data) {
            this.data = data.map(record => {
                return {
                    ...record,
                    statusClass: record.Status === 'processed' ? 'slds-hidden' : ''
                };
            });
        } else if (error) {
            console.error('Error fetching data', error);
        }
    }

    handleSave(event) {
        // Handle save logic here
    }
}
