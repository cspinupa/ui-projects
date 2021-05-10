/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils',
'knockout',
'jquery',
'ojs/ojarraydataprovider',
'ojs/ojlabel',
'ojs/ojselectsingle',
'ojs/ojchart',
'ojs/ojlistview'],
 function(accUtils, ko, $, ArrayDataProvider) {

    function DashboardViewModel() {
      var self = this;
                  
      // chart type values array and ArrayDataProvider observable
      var types = [
        { value: 'pie', label: 'Pie' },
        { value: 'bar', label: 'Bar' }
      ];

      self.chartTypes = new ArrayDataProvider(types, { keyAttributes: 'value' });
      // chart selection observable and default value
      self.val = ko.observable("pie");

      // chart data array and  ArrayDataProvider observable
      var chartData = [
        { "id": 0, "series": "Baseball", "group": "Group A", "value": 42 },
        { "id": 1, "series": "Baseball", "group": "Group B", "value": 34 },
        { "id": 2, "series": "Bicycling", "group": "Group A", "value": 55 },
        { "id": 3, "series": "Bicycling", "group": "Group B", "value": 30 },
        { "id": 4, "series": "Skiing", "group": "Group A", "value": 36 },
        { "id": 5, "series": "Skiing", "group": "Group B", "value": 50 },
        { "id": 6, "series": "Soccer", "group": "Group A", "value": 22 },
        { "id": 7, "series": "Soccer", "group": "Group B", "value": 46 }
      ];
      self.chartDataProvider = new ArrayDataProvider(chartData, { keyAttributes: 'id' });  

      var url = "js/store_data.json";  //defines link to local data file

      self.activityDataProvider = ko.observable();  //gets data for Activities list

      // Get Activities objects from file using jQuery method and a method to return a Promise
      $.getJSON(url).then(function(data) {
          // Create variable for Activities list and populate using key attribute fetch
          var activitiesArray = data;
          self.activityDataProvider(new ArrayDataProvider(activitiesArray, { keyAttributes: 'id' }));
        }
      );
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
