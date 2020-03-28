export function setToken(token) {
    return localStorage.setItem('token', JSON.stringify(token));
}

export function setUserInfo(data) {
    return localStorage.setItem('info', JSON.stringify(data));
}


export function setStroge(key, data) {
    console.log(data);
    return localStorage.setItem(key, JSON.stringify(data));
}

export function clear() {
    return localStorage.clear();
}


export const HOST = document.location.hostname === 'localhost' ? 'http://shuangchuang.dev.xz.sugonup.com' : '';
// export const pubkey = 'thisIsGuiGangAESASecretKeyuc0xs9'
export const pubkey = '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsZYgNuAzbH6yAVRKTdod\nx4NddUV+i7TdOr4WV1YficQEb5TlWEL0g05p+sqqdFKKye5OM+vDDZLGxoOCHlPs\n2F2Ziq6SEcDZgh/UiUK65vCA6G/QyIBb7H8RJ6oc+oALub/rt932oz/z57gPhTm1\nMi2KIkUrZ2BUSRRLJ5COdd5tlXXpIu+EoaHyjanv3Llarw/Uvut2HG73c7YvqZty\nrf6y16+eAl+xLZa7C6A8F0jDr8K7sbN7JrUvFxWYic6UL3Tzj9LiXfnS6ENJMjy9\n7VVsT2nLMYt1YxFgV3ltZH/7DLsEBWpPLY9rXI4gPqIKq/kouZcyhncudGCCR2Jc\nNwIDAQAB\n-----END PUBLIC KEY-----';

export function isEmptyObject(obj) {
    for (var n in obj) {
        return false;
    }
    return true;
}


export const download = (url, name) => {
    const a = document.createElement('a');
    name = name || '';
    // a.download = (name && name.lastIndexOf('.') === -1) ? name + url.substr(url.lastIndexOf('.')) : name;
    // console.log(url.substr(url.lastIndexOf('/') + 1));
    a.download = url.substr(url.lastIndexOf('/') + 1);
    if (document.location.hostname && document.location.hostname === 'localhost') {
        a.href = `${HOST}${url}`; //eslint-disable-line
    } else {
        a.href = `${HOST}${url}`;//eslint-disable-line
    }
    a.className = 'domA';
    document.body.appendChild(a); // 火狐浏览器需要这样才可以
    a.click();
    a.remove();
};


export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
// 文件上传大小
export const limit = 8388608;
/**
 * 为金额增加分位符
 * @param {金额} s
 * @param {保留几位小数} n
 */
export const formatMoney = (s, n) => {
    if (!s || isNaN(s) || (typeof s === 'string' && s.indexOf('0') === 0) || s === '') {
        return s;
    }
    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
    let sign = s.indexOf('-') === 0 ? '-' : '';
    if (sign === '-') {
        s = s.replace('-', '');
    }
    let left = s.split('.')[0].split('').reverse();
    let right = s.split('.')[1];
    let result = '';
    for (let i = 0; i < left.length; i++) {
        result += left[i] + ((i + 1) % 3 === 0 && (i + 1) !== left.length ? ',' : '');
    }
    return sign + result.split('').reverse().join('') + (right ? '.' + right : '');
};



export const sliceText = (str, num = 25) => {
    return str.length > num ? `${str.slice(0, num)}...` : str
}