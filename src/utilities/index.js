export const sortArray = (array, prop) =>
  array.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return -1;
    }
    if (a[prop] > b[prop]) {
      return 1;
    }
    return 0;
  }); // Because of limited data, this sorting function is okay but for large amount of data, another alghorithm such as quicksort,bubblesort,etc. could be used.




export const inFiveMinutes = () => new Date(new Date().getTime() + 5 * 60 * 1000);  //  In order to set deleting time of logged-in cookie



export default { sortArray, inFiveMinutes };