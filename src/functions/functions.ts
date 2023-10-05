/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */
/* global clearInterval, console, setInterval */
export function add(first: number, second: number): number {
  return first + second;
}

/**
 * Displays the current time once a second.
 * @customfunction
 * @param invocation Custom function handler
 */
export function clock(invocation: CustomFunctions.StreamingInvocation<string>): void {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time.
 * @returns String with the current time formatted for the current locale.
 */
export function currentTime(): string {
  return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction
 * @param incrementBy Amount to increment
 * @param invocation Custom function handler
 */
export function increment(incrementBy: number, invocation: CustomFunctions.StreamingInvocation<number>): void {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */
export function logMessage(message: string): string {
  console.log(message);

  return message;
}

/**
 * Unpivots a range of cells.
 * @customfunction UNPIVOT
 * @param headers The range of cells that represent your headers.
 * @param rows The range of cells that represent your row headers.
 * @param values The range of cells that represent your range of values.
 * @returns  The normalized range of cells.
 */
export function unpivot(headers: any[], rows: any[], values: any[][]): any[][] {
  
  let unpivot_data = [];
  
  for (var row = 0; row < rows.length; row++) {
    for (var header = 0; header < headers.length; header++) {
      unpivot_data.push([rows[row], headers[header], values[row][header]]);
    }
  }

  return unpivot_data;
}
  //         'Put all the pieces together.
  //         UnpivotData(row_num, 1) = RowField
  //         UnpivotData(row_num, 2) = ColumnResult(1, j)
  //         UnpivotData(row_num, 3) = ValueResult(i, j)

  //         'Increment the row number
  //         row_num = row_num + 1

    // var numColumns = source.getLastColumn();
    // var numRows = source.getLastRow();  

    // //GET NUMBER OF HEADERS (PRODUCTS)  
    // var products = []; // get product models in the first row

    // for (var b = 2; b <= numColumns; b++){
    //   if (source.getRange(1, b).getValue() != "") {
    //     products.push([source.getRange(1, b).getValue()]); //store
    //   }
    // }

    // // PRODUCTS and SITES INTO COLUMNS
    // var output = [];  
    // var sites = []; // get sites list
    // for (var a = 3; a <= numRows; a++){
    //   if (source.getRange(a, 1).getValue() != "") {
    //     sites.push([source.getRange(a, 1).getValue()]); //store
    //   }
    // }

    // for(var p in products){
    //   for(var s in sites){
    //     var row = [];
    //     row.push(sites[s]);
    //     row.push(products[p]);
    //     output.push(row);//collect data in separate rows in output array
    //   }
    //  }

    // var date = Utilities.formatDate(new Date(), SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "M/d/yyyy");
    // Logger.log('Date = ' +date)
    // ss.insertSheet(date,0).getRange(1,1,output.length,output[0].length).setValues(output);

    //   var newSheet = ss.getSheetByName(date);


    // // COPY REGIONS

    // var numProducts = products.length; // number of models
    // Logger.log('numProducts = ' +numProducts);

    // var i = 1;
    // var j = 3 // first column number to copy
    // do {
    //   var colC = newSheet.getRange("C1:C").getValues();
    //   var copyToCell = colC.filter(String).length+1;
    //   Logger.log('copyTo R = ' +copyToCell);

    //   source.getRange(3,2,numRows-2,1).copyTo(newSheet.getRange(copyToCell,3), {contentsOnly:true});
    //   i++;

    //   source.getRange(3,j,numRows-2,2).copyTo(newSheet.getRange(copyToCell,4), {contentsOnly:true});
    //   j+=2;  
    // }
    // while (i <= numProducts);
    // while (j < numColumns);


    // // SORT BY SITE AND PRODUCT  
    // newSheet.getDataRange().sort([1, 2]);


  // 'Take the ranges passed through and grab their values.
  // ValueResult = Value_Range.Value
  // ColumnResult = Column_Range.Value
  // RowResult = Row_Range.Value

  // 'Calculate the number of Columns and Rows Needed
  // NumberOfColsNeeded = Row_Range.Columns.Count + Column_Range.Rows.Count
  // NumberOfRowsNeeded = Row_Range.Rows.Count * Column_Range.Columns.Count

  // 'Resize the UnpivotData Array, so it matches the number of rows and columns needed.
  // ReDim UnpivotData(1 To NumberOfRowsNeeded, 1 To NumberOfColsNeeded + 1)

  // 'Initalize the row number
  // row_num = 1

  // 'Loop through each Row.
  // For i = 1 To Row_Range.Rows.Count

  //     'Grab the Row Field
  //     RowField = RowResult(i, 1)

  //     'Loop through each column
  //     For j = 1 To Column_Range.Columns.Count

  //         'Put all the pieces together.
  //         UnpivotData(row_num, 1) = RowField
  //         UnpivotData(row_num, 2) = ColumnResult(1, j)
  //         UnpivotData(row_num, 3) = ValueResult(i, j)

  //         'Increment the row number
  //         row_num = row_num + 1
  //     Next
  // Next

  // headers
  // rows
  // values
