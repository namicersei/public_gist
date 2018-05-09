import {Gist} from '../../gist';

export class SortUtility {
  //function to sort by name
  static sortByName(gistList: Gist[]) {
    for (let i = 0, size = gistList.length; i < size; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (gistList[j].owner.login.toLowerCase() > gistList[j + 1].owner.login.toLowerCase()) {
          const temp = gistList[j];
          gistList[j] = gistList[j + 1];
          gistList[j + 1] = temp;
        }
      }
    }
  }
  
  //function to sort by lastupdated
  static sortByLastUpdated(gistList: Gist[]) {
    for (let i = 0, size = gistList.length; i < size; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (gistList[j].updated_at > gistList[j + 1].updated_at) {
          const temp = gistList[j];
          gistList[j] = gistList[j + 1];
          gistList[j + 1] = temp;
        }
      }
    }
  }
  //function to sort by firstupdated
  static sortByFirstUpdated(gistList: Gist[]) {
    for (let i = 0, size = gistList.length; i < size; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (gistList[j].updated_at < gistList[j + 1].updated_at) {
          const temp = gistList[j];
          gistList[j] = gistList[j + 1];
          gistList[j + 1] = temp;
        }
      }
    }
  }
//function to sort by description
  static sortByLastDescription(gistList: Gist[]) {
    for (let i = 0, size = gistList.length; i < size; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (gistList[j].description === '' && gistList[j + 1].description !== '') {
          const temp = gistList[j];
          gistList[j] = gistList[j + 1];
          gistList[j + 1] = temp;
        }
      }
    }
  }

 

}
