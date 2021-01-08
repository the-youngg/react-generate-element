import StringUtil from "../components/utils/StringUtil";
import Global from "../components/utils/Global";


async function uploadImage(file: any, uuid?: string) {

    const _uuid = StringUtil.uuid();
    const key = uuid || StringUtil.formatImageUrl(_uuid);

    const formData = new FormData();
    formData.append('key', key);
    formData.append("Content-Type", "image/jpeg");
    formData.append("Cache-Control", "no-cache");
    formData.append("acl", "public-read");
    formData.append('file', file);

    return window.fetch(Global.imageUploadUrl, {
        method: 'post',
        body: formData
    }).then(() => key);
}


const awsS3Service = {
    uploadImage,
};
export default awsS3Service;
