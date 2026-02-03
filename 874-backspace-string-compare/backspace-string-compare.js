/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sStack = [];
    let tStack = [];

    for(let i=0; i<s.length;i++){
        if(s[i] !== "#"){
            sStack.push(s[i])
        }else{
            sStack.pop();
        }
    }

    for(let i= 0; i<t.length;i++){
        if(t[i] !== "#"){
            tStack.push(t[i])
        }else{
            tStack.pop();
        }
    }

    return sStack.join("") === tStack.join("");
};