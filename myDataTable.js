
import { LightningElement, track, wire } from 'lwc';
import getRecords from '@salesforce/apex/MyApexController.getRecords';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Status', fieldName: 'Status', editable: false }, // Status is not editable
    // Add other columns as needed
];

export default class MyDataTable extends LightningElement {
    @track data = [];
    @track columns = COLUMNS;

    @wire(getRecords)
    wiredRecords({ error, data }) {
        if (data) {
            this.data = data.map(record => {
                return {
                    ...record,
                    _editable: record.Status !== 'processed' // Custom attribute to control editability
                };
            });
        } else if (error) {
            console.error('Error fetching data', error);
        }
    }

    renderedCallback() {
        this.template.querySelectorAll('lightning-datatable').forEach(table => {
            table.data.forEach(row => {
                if (!row._editable) {
                    table.querySelector(`tr[data-row-key-value="${row.Id}"]`).setAttribute('data-editable', 'false');
                }
            });
        });
    }

    handleSave(event) {
        // Handle save logic here
    }
}



