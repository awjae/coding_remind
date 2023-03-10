import { fetchRequest } from './api.js';
import Breadcrumb from './Breadcrumb.js';
import Nodes from './Nodes.js';
import Loading from './Loading.js';
import ImageView from './ImageView.js';
import Paging from './Paging.js';

export default function App({target}) {

    this.state = {
        files: [],
        path: [""],
        pathName: [""],
        list: [1,2,3,4,5,6,7,8,98,9,101,2,2,3,1,2,3,1,23,1,2,5,23,6,67],
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
        }
    }

    this.render = async () => {

        const paging = new Paging({ target, list: this.state.list });

        const loading = new Loading();
        // const result = await fetchRequest(this.state.path[this.state.path.length - 1]);
        loading.delete();
        this.setState({ files: result });

        const breadcrumb = new Breadcrumb({target, path: this.state.path, pathName: this.state.pathName});
        const nodes = new Nodes({
            target, 
            path: this.state.path,
            files: this.state.files, 
            onClick: (e, fileName) => {
                if (e.currentTarget.dataset.type === "DIRECTORY") {
                    this.setState({ path: this.state.path.concat([e.currentTarget.dataset.id]), pathName: this.state.pathName.concat([fileName]) });
                    this.render();
                } else if (e.currentTarget.dataset.type === "FILE") {
                    const imageView = new ImageView({ url: e.currentTarget.dataset.filePath });
                }
            },
            onPrev: (e) => {
                this.setState({
                    path: this.state.path.slice(0, -1),
                    pathName: this.state.pathName.slice(0, -1)
                })
                this.render();
            }
        });

    }
    this.render();
}

new App({target: document.querySelector('.App')});