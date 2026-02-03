/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length-1;
    let j = t.length-1;
    let tSkip = 0;
    let sSkip = 0;

    // looking for next valid char 
    while(i>=0 || j>=0){
        while(i>=0){
            if(s[i] == "#"){
                sSkip++;
                i--;
            }else if(sSkip > 0){
                sSkip--;
                i--;
            }else{
                break;
            }
        }

        while(j>=0){
            if(t[j] == "#"){
                tSkip++;
                j--;
            }else if(tSkip > 0){
                tSkip--;
                j--;
            }else{
                break;
            }
        }

        if(i>=0 || j>=0){
            if(s[i] !== t[j]) return false;
        }
        i--;
        j--;
    }
    return true;
};