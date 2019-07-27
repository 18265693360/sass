var dyCheckbox = {
    template: `
            <div>

                <h1>你喜欢什么样的妹子？</h1>
                <label>
                    优雅的
                    <input type="checkbox" value="优雅的" v-model="currentValue">
                </label>
                <label>
                    安静的
                    <input type="checkbox" value="安静的" v-model="currentValue">
                </label>
                <label>
                    搞怪的
                    <input type="checkbox" value="搞怪的" v-model="currentValue">
                </label>
                <label>
                    美丽的
                    <input type="checkbox" value="美丽的" v-model="currentValue">
                </label>
                <button @click="toValue">传值</button>
            </div>
        `,
    data() {
        return {
            currentValue: []
        }
    },
    // watch: {
    //     currentValue(value) {
    //         this.$emit("give-value", value)
    //     }
    // },
    methods: {
        toValue() {
            this.$emit("give-value", this.currentValue)
        }
    }
}