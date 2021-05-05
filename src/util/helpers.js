import * as dayjs from 'dayjs'

export function leadingSlash (str) {
  return str.startsWith('/') ? str : '/' + str
}

export function trailingSlash (str) {
  return str.endsWith('/') ? str : str + '/'
}

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export function age (date, addText=false) {
  const now = dayjs();
  if(now.diff(date,'y') === 0){
    if(now.diff(date,'M') === 0){
      return `${now.diff(date,'d')}${addText ? ' dias':''}`;
    }else{
      return `${now.diff(date,'M')}${addText ? ' meses':''}`;
    }
  }else{
    return `${now.diff(date,'y')}${addText ? ' años':''}`;
  }
}
