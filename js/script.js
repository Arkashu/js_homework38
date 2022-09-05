'use strict'
const generateList = (function (...args) {
    const ul = document.createElement('ul');
    document.body.append(ul);
    for (const item of args) {
        if (Array.isArray(item)) {
            for (const itemElement of item) {
                const li = document.createElement('li');
                ul.append(li);
                if (Array.isArray(itemElement)){
                    const ulChild = document.createElement('ul');
                    li.append(ulChild)
                    for (const ulChildElement of itemElement) {
                        const li2 = document.createElement('li');
                        ulChild.append(li2);
                        li2.innerText = ulChildElement;
                    }
                } else {
                    li.innerText = itemElement
                }
            }
        } else {
            const li = document.createElement('li');
            ul.append(li);
            li.innerText = item;
        }
    }
})
generateList([1, 2,[1.1, 1.2, 1.3], 3], 4, 5, [6, 7, 8])
