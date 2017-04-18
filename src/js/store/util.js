export function prodMapState([...args]) {//生成mapStateToProps函数
    const result = {};
    return function mapStateToProps(state) {
        args.forEach((el, i) => {
            Object.assign(result, { [el]: state[el] });
        })
        return { ...result }
    }
}