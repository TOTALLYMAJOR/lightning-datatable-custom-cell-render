public with sharing class MyApexController {
    @AuraEnabled(cacheable=true)
    public static List<SObject> getRecords() {
        // Replace 'SObject' with your actual object and adjust the query as needed
        return [SELECT Id, Name, Status FROM SObject LIMIT 100];
    }
}
