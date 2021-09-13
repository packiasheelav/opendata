 import moment from 'moment';

 const dateFormat =(date,code)=>{
    return moment(new Date(date)).format(code)

}

export default dateFormat;