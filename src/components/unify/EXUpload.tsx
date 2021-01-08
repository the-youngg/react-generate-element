import React, {forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useEffect, useState} from "react";
import {message, Modal, Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {RcCustomRequestOptions, RcFile, UploadFile} from "antd/lib/upload/interface";
import {RuleInputAttribute} from "./index";
import AddBase from "./add/AddBase";
import StringUtil from "../utils/StringUtil";
import awsS3Service from "../../_service/awsS3Service";

const EXUpload: React.FC = (props: RuleInputAttribute<any>) => {

    return (
        <AddBase element={<MyUpload {...props} />}/>
    );
}

const MyUpload: ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>> =
    forwardRef((props, ref) => {

        const [preview, setPreview] = useState(false);
        const [previewImage, setPreviewImage] = useState("");
        const [fileList, setFileList] = useState<UploadFile[]>([]);

        useEffect(() => {
            if (!props.value) {
                return;
            }
            const fileList = props.value.map((item: string, index: number) => {
                return {
                    uid: index,
                    name: item,
                    url: StringUtil.getImageUrl(item)
                }
            });
            setFileList(fileList);
        }, [props])

        const beforeUpload = (file: RcFile) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('只能上传 JPG/PNG 类型的图片!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('图片不能大于 2MB!');
            }
            return isJpgOrPng && isLt2M;
        }

        const onUpload = (options: RcCustomRequestOptions) => {
            const _file = {} as UploadFile;
            const uuid = StringUtil.formatImageUrl(StringUtil.uuid())
            awsS3Service.uploadImage(options.file, uuid).then(
                (url: string) => {
                    message.success("图片上传成功");
                    _file.uid = url
                    _file.name = url
                    _file.status = 'done'
                    _file.url = StringUtil.getImageUrl(url)
                    fileList.push(_file);
                    setFileList(fileList);
                    props.onChange(fileList.map(item => item.name));
                }
            ).catch(() => {
                message.error("图片上传失败，请重新上传");
            })
        };

        const handlePreview = (file: UploadFile) => {
            console.log(file)
            setPreview(true)
            setPreviewImage(file.name);
        }

        const handleRemove = (file: UploadFile) => {
            const result = fileList.filter(item => item.name !== file.name)
            setFileList(result);
            props.onChange(result.map(item => item.name));
        }

        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div style={{marginTop: 8}}>Upload</div>
            </div>
        );

        return (
            <React.Fragment>
                <div style={{display: "flex"}} ref={ref}>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        beforeUpload={beforeUpload}
                        customRequest={onUpload}
                        onPreview={handlePreview}
                        onRemove={handleRemove}
                    >
                        {fileList.length >= (props.uploadCount || 1) ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={preview}
                        title={null}
                        footer={null}
                        onCancel={() => setPreview(false)}
                    >
                        <img alt="preview" style={{width: "100%"}} src={StringUtil.getImageUrl(previewImage)}/>
                    </Modal>
                </div>
            </React.Fragment>
        )
    });

export default EXUpload;
