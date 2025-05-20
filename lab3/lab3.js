/**
 * 
 * @param {number} num 
 * @returns {number} 
 */
export function getDecimal(num) {
    const absoluteNum = Math.abs(num);
    return absoluteNum - Math.floor(absoluteNum);
}

/**
 * 
 * @param {string} url 
 * @returns {string} 
 */
export function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://${url.slice(7)}';
    } else if (url.startsWith('https://')) {
        return url;
    } else {
        return 'https://${url}';
    }
}

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * 
 * @param {string} str 
 * @param {number} maxlength 
 * @returns {string} 
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    } else {
        return str.slice(0, maxlength - 1) + '…';
    }
}

/**
 * 
 * @param {string} str 
 * @returns {string} 
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        if (index === 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }).join('');
}

/**
 * 
 * @param {number} n - 
 * @returns {bigint[]} 
 */
export function fibs(n) {
    if (n === 0) return [];
    if (n === 1) return [0n];
    const sequence = [0n, 1n];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

/**
 * 
 * @param {number[]} arr - 
 * @returns {number[]} 
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * 
 * @param {any[]} arr 
 * @returns {any[]} 
 */
export function unique(arr) {
    return [...new Set(arr)];
}