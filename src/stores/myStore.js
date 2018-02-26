import { observable, computed } from "mobx";

class MyStore {
    @observable
    label = null;

    @computed
    get result() {
        if (!this.label) {
            return null;
        }
        const size = this.label.length();
        return size < 5 ? "yes" : "no";
    }

}

export default new MyStore();