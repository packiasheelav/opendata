import http from '../../http-common';

const list=()=>{
    return http.get('/sensors')
}


const SensorService={
    list,
}

export default SensorService;