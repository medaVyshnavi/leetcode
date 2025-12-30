/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let lsp = buildLSP(needle) ; 
    let i = 0;
    let j = 0;

    while(i < haystack.length){
        if(haystack[i] === needle[j]){
            i++;
            j++;
        } else{
            if(j===0){
                i++;
            } else{
                j = lsp[j-1]
            }
        }

        if(j === needle.length){
            return i - needle.length;
        }
    }
    return -1;
};


const buildLSP = (needle) => {
    let lsp = [0];
    let i = 0;
    let j = 1;

    while( j < needle.length){
        if(needle[i] === needle[j]){
            lsp[j] = i+1;
            i++;
            j++;
        } else{
            if(i === 0){
                lsp[j] = 0;
                j++;
            } else{
                i = lsp[i-1]
            }
        }
    }

    return lsp;
}