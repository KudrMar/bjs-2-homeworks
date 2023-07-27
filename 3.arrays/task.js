function compareArrays(arr1, arr2) {
    let Equal = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  return Equal;
}


function getUsersNamesInAgeRange(users, gender) {
    const initialValue = 0;
    let accfilter = users.filter(user => user.gender === gender);
    result = (accfilter.length === 0) ? 0 : accfilter.reduce((accumulator, currentValue) => accumulator + currentValue.age, initialValue)
        /accfilter.length  ;
    return result;
 }
 
