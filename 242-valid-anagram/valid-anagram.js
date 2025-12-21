/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();

    for(let i=0;i<s.length;i++){
        if(map1.has(s[i])){
            map1.set(s[i],map1.get(s[i])+1)
        }else{
            map1.set(s[i],1)
        }
    }

    for(let i=0;i<t.length;i++){
        if(map2.has(t[i])){
            map2.set(t[i],map2.get(t[i])+1)
        }else{
            map2.set(t[i],1)
        }
    }

    let res = Array(26).fill(0);
    let res2 = Array(26).fill(0);
    let val = [...map1.keys()];
    let val2 = [...map2.keys()];

    for(let i=0;i<val.length;i++){
        let pos = val[i].charCodeAt(0) - 97;
        res[pos] = map1.get(val[i])
    }
    
    for(let i=0;i<val2.length;i++){
        let pos = val2[i].charCodeAt(0) - 97;
        res2[pos] = map2.get(val2[i])
    }

    return res.join("#") === res2.join("#")
};