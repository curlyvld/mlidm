function getData(forms)
{
   const fData = new FormData(forms)
   console.log(fData);
   console.log(fData.get('mas1'));
   console.log(fData.get('mas2'));

   return false
}


/**
 * Валидация параметров ввода
 */
function validateElement(element)
{
    return  (element[0] % 2 != 0 && 
      (element[1] > 0 && element[1] < 9) && 
       element[2] % 2 === 0 && 
      (element[3]>'a' && element[3] < 'z'));

}

/**
 * Удаление дубликатов массива 1
 */
function removeDuplicates(mas1) {
  return Array.from(new Set(mas1));
}

/**
 * Удаление дубликатов массива 2
 */
function removeDuplicates2(mas2) {
  return Array.from(new Set(mas2));
}

/**
 * Объединение массивов
 * @param elementsArray1
 * @param elementsArray2
 * @returns {string}
 */
function  union(elementsArray1, elementsArray2)
{
    let resultArray = [];
    for(let i=0; i<elementsArray1.length; i++)
        resultArray[resultArray.length] = elementsArray1[i];
    for(let i=0; i<elementsArray2.length; i++)
        resultArray[resultArray.length] = elementsArray2[i];
    return "Unification: " + resultArray.join(" ")
}


/**
 * Пересечение массивов
 * @param elementsArray1 
 * @param elementsArray2 
 * @return {string}
 */
function intersection(elementsArray1, elementsArray2)
{
  return "Intersection: " + elementsArray1.filter(value => elementsArray2.includes(value));
}


/**
 * Дополнение массивов A/B
 * @param  elementsArray1 
 * @param  elementsArray2 
 * @return {srting}
 */
function addition(elementsArray1, elementsArray2)
{
  return "Addition A/B: " + elementsArray1.filter(value => !elementsArray2.includes(value));
}


/**
 * Дополнение массивов B/A
 * @param  elementsArray2 
 * @param  elementsArray1
 * @return {string}
 */
function addition2(elementsArray1, elementsArray2)
{
  return "Addition B/A: " + elementsArray2.filter(value => !elementsArray1.includes(value));
}

/**
 * Симметрическая разность массивов
 * @param  elementsArray1 
 * @param  elementsArray2 
 * @return {string}
 */
function symmetricalDifference(elementsArray1,elementsArray2)
{
  const diff1 = elementsArray1.filter((elem) => !elementsArray2.includes(elem));
  const diff2 = elementsArray2.filter((elem) => !elementsArray1.includes(elem));
  
  return "Symmetrical Difference: " + diff1.concat(diff2);
}

/**
 * Основная функция
 */
function main()
{
    let mas1 = document.getElementById("id_mas1").value
    let mas2 = document.getElementById("id_mas2").value
    let strError = "";
    mas1 = mas1.split(" ").filter(elementsArray1 => elementsArray1 !== ''); 
    mas2 = mas2.split(" ").filter(elementsArray2 => elementsArray2 !== ''); 
    console.log(mas1)
    for(let i=0; i<mas1.length; i++)
    {
        if(!validateElement(mas1[i])) {
            strError += "Error in the " + (i + 1) + " element of the first array <br>"
        }
    }

    for(let i=0; i<mas2.length; i++)
    {
        if(!validateElement(mas2[i]))
            strError += "Error in the " + (i+1) + " element of the second array"
    }

    if(strError == "")
    {
        mas1 = removeDuplicates(mas1);
        mas2 = removeDuplicates2(mas2);

        document.getElementById('result').innerHTML = "Result:<br>"
        document.getElementById('result').innerHTML += union(mas1, mas2) + '<br>'
        document.getElementById('result').innerHTML += intersection(mas1, mas2) + '<br>'
        document.getElementById('result').innerHTML += addition(mas1, mas2) + '<br>'
        document.getElementById('result').innerHTML += addition2(mas1, mas2) + '<br>'
        document.getElementById('result').innerHTML += symmetricalDifference(mas1, mas2)
    }
    else {
        document.getElementById('result').innerHTML = strError
    }

}
