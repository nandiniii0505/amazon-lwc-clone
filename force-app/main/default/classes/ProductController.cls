public with sharing class ProductController {
    
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts() {
        return [
            SELECT Id, Name, Description, Family, Image_URL__c, IS_Featured__c, IsActive 
            FROM Product2 
            WHERE IsActive = true
        ];
    }
}