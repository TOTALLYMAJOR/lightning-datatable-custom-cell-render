# lightning-datatable-custom-cell-render
Custom Lightning Web Component (LWC) that dynamically disables inline editing based on the status field of each record.

![image](https://github.com/TOTALLYMAJOR/lightning-datatable-custom-cell-render/assets/7169661/dd62ca58-55bd-4d88-a3a8-2879ecc701ce)
# Custom Lightning Data Table with Conditional Inline Editing

This project demonstrates how to create a Lightning Web Component (LWC) that displays a data table with conditional inline editing based on the status of each record. Specifically, inline editing is disabled for rows where the status is "processed".

## Project Structure

force-app
│
└───main
└───default
└───lwc
│ └───myDataTable
│ │ myDataTable.html
│ │ myDataTable.js
│ │ myDataTable.js-meta.xml
│ │ myDataTable.css
│ └───customCellRenderer
│ │ customCellRenderer.html
│ │ customCellRenderer.js
│ │ customCellRenderer.js-meta.xml
└───classes
│ MyApexController.cls
│ MyApexController.cls-meta.xml

markdown
Copy code

## Components

### myDataTable

This component is responsible for displaying the data table and handling the logic to disable inline editing based on the status field.

- **myDataTable.html:** Defines the structure of the data table.
- **myDataTable.js:** Contains the logic to fetch data and set the inline editing dynamically.
- **myDataTable.js-meta.xml:** Metadata configuration for the Lightning Web Component.
- **myDataTable.css:** Custom CSS to handle any styles, including hiding certain elements.

### customCellRenderer

A custom cell renderer used to conditionally render the editable input fields.

- **customCellRenderer.html:** Template for rendering editable or non-editable cells.
- **customCellRenderer.js:** Logic to determine if a cell should be editable.
- **customCellRenderer.js-meta.xml:** Metadata configuration for the custom cell renderer component.

### Apex Controller

The Apex controller fetches the records to be displayed in the data table.

- **MyApexController.cls:** Contains the Apex method to fetch records from Salesforce.
- **MyApexController.cls-meta.xml:** Metadata configuration for the Apex class.

## Setup and Deployment

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Authorize your Salesforce org and provide the alias `my-org`:**
    ```bash
    sfdx force:auth:web:login -a my-org
    ```

3. **Deploy the Apex controller to your Salesforce org:**
    ```bash
    sfdx force:source:deploy -p force-app/main/default/classes
    ```

4. **Deploy the Lightning Web Component to your Salesforce org:**
    ```bash
    sfdx force:source:deploy -p force-app/main/default/lwc
    ```

5. **Assign the LWC to a Lightning page:**
    - Navigate to the Lightning App Builder in Salesforce.
    - Select or create a Lightning page (e.g., App Page, Record Page, Home Page).
    - Drag and drop the `myDataTable` component onto the page.
    - Save and activate the page.

## Usage

Once deployed and added to a Lightning page, the data table will display records with conditional inline editing. Rows where the status is "processed" will not be editable.

## Customization

- **Modify Columns:** Update the `COLUMNS` constant in `myDataTable.js` to include or exclude fields as needed.
- **Fetch Different Records:** Update the SOQL query in `MyApexController.cls` to fetch different records or fields based on your requirements.

## Contributing

Feel free to fork this repository and make any improvements or customizations. Pull requests are welcome!

## License

This project is licensed under the MIT License
