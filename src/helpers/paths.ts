const paths = {
 
    homePath(){
        return '/';
    },

    showTopicPath(topicSlug:string){
        return `/topics/${topicSlug}`; 
    },
    postCreatePath(topicSlug:string){
        return `/topics/${topicSlug}/posts/new`;
    },
    postShowPath(topicSlug:string,postId:string){
        return  `/topics/${topicSlug}/posts/${postId}`;
    }

}

export default paths;