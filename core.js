export default function html([first, ...strings], ...values){
    // console.log(first)
    // console.log(strings)
    // console.log(values)

    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
   
}

export function createStore(reducer){
    let state = reducer();
    // console.log(state)
    const roots = new Map()
    

    function render() {
        // console.log(roots)
        for (const [root, component] of roots){
            // console.log(component)
            // console.log(root)
            const output = component()
            // console.log(output)
            root.innerHTML = output;
        }      
         
                            
    }

    return {
        attach(component, root){
            roots.set(root, component)
            render()
        },
        connect(selector = state => state){
            return component => (props, ...args) => {
                // console.log(component)
                // console.log(props)
                // console.log(Object.assign({}, props, selector(state), ...args))
                return component(Object.assign({}, props, selector(state), ...args))
            }
                

        },
        dispatch(action, ... args){
            state = reducer(state, action, args)
            // console.log(state)
            render()
        }
    }
}
