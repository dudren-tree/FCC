function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for(let j = 0; j < array.length - 1 - i; j++) {
        if(array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);


  ////
  function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
       let minInd = i; 
      for(let j = i; j < array.length; j++) {
        if(array[j] < array[minInd]) {
          minInd = j;
        }
      }
      const temp = array[i];
      array[i] = array[minInd];
      array[minInd] = temp;
    }
    return array;
  }
  
  
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

  ////
  function insertionSort(array) {
    for(let i = 1; i< array.length; i++){
  
      for(let j = i; j > 0; j--) {
        if(array[j] < array[j-1]){
          const temp = array[j];
          array[j] = array[j-1];
          array[j-1] = temp;
        } else {
          break;
        }
      }
    }
    return array;
  }
  
  insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

  ////
  function quickSort(array) {
    if(array.length === 1) {
      return array;
    }
  
    const temp = array[array.length - 1];
    const leftArr = [];
    const rigthArr = [];
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] < temp) {
        leftArr.push(array[i])
      } else {
        rigthArr.push(array[i])
      }
    }
    if(leftArr.length > 0 && rigthArr.length > 0) {
      return [...quickSort(leftArr), temp, ...quickSort(rigthArr)];
    } else if (leftArr.length > 0) {
      return [...quickSort(leftArr), temp];
    } else {
      return [temp, ...quickSort(rigthArr)];
    }
  }
  
  quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])

  ////
  const mergeSort =(array) => {
    if(array.length <=1) {
      return array
    }
  
    const midd = Math.floor(array.length / 2);
    const leftArr = array.slice(0, midd);
    const rightArr = array.slice(midd);
  
    return merge(
      mergeSort(leftArr), 
      mergeSort(rightArr)
      )
  }
  
  const merge = (leftArr, rightArr) => {
    const output = [];
    let leftInd = 0;
    let rightInd = 0;
  
    while (leftInd < leftArr.length && rightInd < rightArr.length) {
      const leftEl = leftArr[leftInd];
      const rightEl = rightArr[rightInd];
      if(leftEl < rightEl) {
        output.push(leftEl);
        leftInd++
      } else {
        output.push(rightEl);
        rightInd++;
      }
    }
  
    return [...output, ...leftArr.slice(leftInd), ...rightArr.slice(rightInd)];
  }
  
  mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);