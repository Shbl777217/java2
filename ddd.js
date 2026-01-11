

(function () {

    this.DOMAIN = "story.aayemen.net";
    // this.DOMAIN = "app.te3b.local";
    this.URL = "https://" + this.DOMAIN;
    this.WS = URL + ":8443";
    this.initStoryInterval = null;

    this.stories = [];

    this.socket = io(this.WS, {
        transports: ['websocket', 'polling'],
        secure: true,
        reconnection: true,
        rejectUnauthorized: false,
        query: "te3bstory=te3bstory"
    }
    );

    this.socket.on("connect", () => {
        this.initStoryInterval = setInterval(() => {
            if (!myid || !users) return;
            if (!$(users).find(".uzr.uhtml.uid" + myid).length) return;
            clearInterval(this.initStoryInterval);
            this.init(this);
        }, 2000);
    });

    this.socket.on("str:new", story => {
        if (!this.mUser) return;
        this.onNewStory(this, story, false);
    });

    this.socket.on("str:view", data => {
        if (!this.mUser) return;
        this.onViewStory(this, data);
    });

    this.socket.on("str:del", data => {
        if (!this.mUser) return;
        this.onRemoveStory(this, data.id, data.by);
    });

    this.socket.on("str:like", data => {
        if (!this.mUser) return;
        this.onLikeStory(this, data);
    });

    this.socket.on("str:comment", data => {
        if (!this.mUser) return;
        this.onCommentStory(this, data);
    });

    this.socket.on("str:comment:like", data => {
        if (!this.mUser) return;
        this.onLikeCommentStory(this, data);
    });

    this.socket.on("str:comment:del", data => {
        if (!this.mUser) return;
        this.onRemoveCommentStory(this, data);
    });

    this.init = function (context) {
        if (window.storyBoard) return;
        this.setCurrentUser(this);
        this.renderStoryBoard(this);
        this.registerEvents(this);

        this.socket.emit("req", { a: "check", d: { u: this.getHashedUser(this), t: this.mUser.token } }, res => {
            if (!res || typeof res != "object") return;
            if (res.r) this.mUser.rm = true;

            if (typeof res.t == "string") {
                this.setCurrentUserToken(this, res.t);
            }

            if(res.t_expired) {
                localStorage.removeItem("str_token");
                this.setCurrentUserToken(this, null);
                this.requestPassword(() => {
                    this.setCurrentUserToken(this, res.t);
                })
            }

            if (res.s) this.setStories(this, res.s);
            if (res.l) window.rscl = res.l;
        });
    }

    this.registerEvents = function (context) {
        context.addStory(context);
        context.onAddStory(context);
    }

    this.getHashedUser = function (context) {
        return { hash: context.mUser.hash, dec: context.mUser.dec, token: context.mUser.token };
    }

    this.requestPassword = function(callback) {
        let password = null;
        if (!this.mUser.token) {
            password = prompt("ط§ظ„ط±ط¬ط§ط، ط¥ط¯ط®ط§ظ„ ظƒظ„ظ…ط© ط§ظ„ظ…ط±ظˆط± ط§ظ„ط®ط§طµط© ط¨ط¥ط´طھط±ط§ظƒ ط§ظ„ط³طھظˆط±ظٹ");
        }

        if (!password && !this.mUser.token) return;

        this.socket.emit("req", { a: "pass:check", d: { p: password } }, res => {
            if (typeof res == "object") {
                callback();
            } else {
                return alert(" ظ„ط§طھظˆط¬ط¯ ظ„ط¯ظٹظƒ ط§ظ„طµظ„ط§ط­ظٹط§طھ ظ„ط±ظپط¹ ط§ظ„ط³طھظˆط±ظٹ / ظ„ظ„ط§ط´طھط±ط§ظƒ ط¨ط®ط§طµظٹط© ط§ظ„ط³طھظˆط±ظٹ ظٹط±ط¬ظ‰ ظ…ط±ط§ط³ظ„ط© ط§ظ„ط§ط¯ط§ط±ط© ط§ظˆ ط´ط¨ظ„ ط§ظ„ظٹظ…ظ†");
            }
        });
    }

    this.addStory = function (context) {
        window.storyBoard.find(".story-board--item.add").unbind("click").on("click", (e) => {
            e.stopPropagation();
            if (window.isStoryUploading) return;
            if (!context.mUser.token) {

                this.requestPassword(() => {
                    this.setCurrentUserToken(this, res.t);
                    window.storyBoard.find("#story-board--item--input").trigger("click");
                })

            } else {
                window.storyBoard.find("#story-board--item--input").trigger("click");
            }
        });
    }

    this.makeRequest = function (context, method, url, formData, input, done) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            input.value = null;
            done(context, null, xhr.response);
        };
        xhr.onerror = function () {
            input.value = null;
            alert("ط­ط¯ط« ط®ط·ط£ ط£ط«ظ†ط§ط، ط±ظپط¹ ط§ظ„ظ…ظ„ظپ");
        };
        xhr.send(formData);
    }

    this.onAddStoryCallback = function (context, err, res) {
        if (err) return;
        res = JSON.parse(res);

        window.storyBoard.find("#story-board--item--input")[0].value = "";
        delete window.isStoryUploading;
        if (res.error === false) {
            const story = {
                id: res.id,
                user_id: res.user_id,
                type: res.type,
                file: res.file,
                likes: 0,
                created_at: res.created_at,
            };
            context.onNewStory(context, story, true);
            context.socket.emit("req", { a: "str:add", d: { id: res.id, t: context.mUser.token, u: { pic: context.mUser.pic, icon: context.mUser.icon } } }, (res) => { });
        } else {
            return alert(res.message);
        }

    }

    this.onNewStory = function (context, story, myStory) {

        const hasStory = this.stories.find(str => str.user.dec == mUser.dec && str.user.hash == mUser.hash);

        story.user = myStory ? context.mUser : context.findUser(context, story.user.dec, story.user.hash);

        if (myStory || !hasStory) {
            window.storyBoard.find(".story-board--item.add").after(context.renderStoryItem(context, story));
        } else {
            window.storyBoard.find(".story-board--item").eq(1).after(context.renderStoryItem(context, story));
        }

        context.stories.push(story);
        context.registerStoryItemEvents(context);

    }

    this.onAddStory = function (context) {
        window.storyBoard.find("#story-board--item--input").unbind("change").on("change", (e) => {

            const formData = new FormData();
            formData.append("token", context.mUser.token);
            formData.append("file", e.target.files[0]);

            let url = null;
            var type = e.target.files[0].type.split("/")[0];
            if (type == "image") url = "/story_upload_photo";
            if (type == "audio") url = "/story_upload_audio";
            if (type == "video") url = "/story_upload_video";
            if (!url) return;

            window.isStoryUploading = true;

            context.makeRequest(context, "POST", context.URL + url, formData, e.target, context.onAddStoryCallback);

        });
    }

    this.setStories = function (context, stories) {
        if (!stories || !stories.length) return;
        context.stories = stories;
        const renderedUserStories = [];
        context.stories.forEach(story => {
            if (!story.user || renderedUserStories.indexOf(story.user_id) >= 0) return;
            if (story.user.dec == context.mUser.dec && story.user.hash == context.mUser.hash) {
                window.storyBoard.find(".story-board--item.add").after(context.renderStoryItem(context, story));
            } else {
                window.storyBoard.append(context.renderStoryItem(context, story));
            }
            renderedUserStories.push(story.user_id);
        });
        context.registerStoryItemEvents(context);
    }

    /**********************************************************************************************************************************/

    this.getCurrentUserPic = function () {
        const fallback = "pic.png";
        const backgroundCSS = $(users).find(".uzr.uhtml.uid" + myid).find(".fitimg.u-pic").css("background-image");
        if (!backgroundCSS) return fallback;
        const splitBackgroundCSS = backgroundCSS.split('"');
        if (!splitBackgroundCSS || splitBackgroundCSS.length < 3) return fallback;
        return splitBackgroundCSS[1];
    }

    this.getUserPic = function ($user) {
        const fallback = "pic.png";
        const backgroundCSS = $user.find(".fitimg.u-pic").css("background-image");
        if (!backgroundCSS) return fallback;
        const splitBackgroundCSS = backgroundCSS.split('"');
        if (!splitBackgroundCSS || splitBackgroundCSS.length < 3) return fallback;
        return splitBackgroundCSS[1];
    }

    this.getCurrentUserDec = function () {
        const dec = $(users).find(".uzr.uhtml.uid" + myid).find(".u-topic");
        if (!dec || !dec.length) return "";
        return dec.text().trim().trim();;
    }

    this.getCurrentUserHash = function () {
        const hash = $(users).find(".uzr.uhtml.uid" + myid).find(".uhash");
        if (!hash || !hash.length) return "";
        return hash.text().replace("#", "").trim();
    }

    this.getCurrentUserIcon = function () {
        const icon = $(users).find(".uzr.uhtml.uid" + myid).find(".u-ico");
        if (!icon || !icon.length) return "";
        return icon.attr("src");
    }

    this.getCurrentUserLikes = function () {
        $(users).find(".uzr.uhtml.uid" + myid).click();
        const likesText = $(upro).find(".ulike").text().trim().replace(",", "");
        $("#upro").find(".modal-header .fa-times").click();
        if (!likesText) return 0;

        const suffixes = { 'K': 1000, 'M': 1000000, 'B': 1000000000 };

        const suffix = likesText.slice(-1);
        if (!isNaN(parseInt(suffix))) return parseInt(likesText);

        const numericPart = parseFloat(likesText);

        if (suffixes.hasOwnProperty(suffix)) {
            return numericPart * suffixes[suffix];
        } else {
            return isNaN(parseInt(likesText)) ? 0 : parseInt(likesText);
        }
    }

    this.setCurrentUser = function (context) {
        context.mUser = {
            pic: context.getCurrentUserPic(),
            dec: context.getCurrentUserDec(),
            hash: context.getCurrentUserHash(),
            icon: context.getCurrentUserIcon(),
            token: localStorage.getItem("str_token"),
        };
    }

    this.setCurrentUserToken = function (context, token) {
        context.mUser.token = token;
        localStorage.setItem("str_token", token);
    }

    this.findUser = function (context, dec, hash) {
        if (!dec || !hash) return null;

        if (context.mUser.dec == dec && context.mUser.hash == hash) return context.mUser;

        const $user = $(users).find(".uzr:contains('" + dec + "') .uhash:contains('#" + hash + "')").closest(".uzr");
        if (!$user || !$user.length) return null;

        const icon = $user.find(".u-ico").attr("src");
        const pic = context.getUserPic($user);

        return { dec, hash, pic, icon };

    }

    this.findUserById = function (context, id) {
        if (!id) return null;
        if (id == myid) return context.mUser;

        const $user = $(users).find(".uzr.uhtml.uid" + id);
        if (!$user || !$user.length) return null;

        const dec = $user.find(".u-topic").text().trim();
        const hash = $user.find(".uhash").text().replace("#", "").trim();
        const pic = context.getUserPic($user);
        const icon = $user.find(".u-ico").text().trim();

        return { dec, hash, pic, icon };

    }

    this.renderStoryItem = function (context, story) {
        if (window.storyBoard.find('.story-board--item[data-user="' + story.user_id + '"]').length) return "";

        if (!story || !story.user) return "";

        let imageSrc = story.user.pic;
        if (story.type == "photo") {
            imageSrc = context.URL + "/uploads/story/photos/" + story.file;
        } else if (story.type == "video") {
            imageSrc = context.URL + "/uploads/story/videos/" + story.file;
            document.createElement('video').src = imageSrc;
        } else if (story.type == "audio") {
            document.createElement('audio').src = imageSrc;
        }

        let html = '<div class="story-board--item" data-user="' + story.user_id + '">';
        if (story.type == "video") {
            html += '<video class="img_bg" preload="auto" src="' + imageSrc + '" ></video>';
        } else {
            if (story.type == "audio") {
                html += '<audio style="display: none;" preload="auto" src="' + imageSrc + '" ></audio>';
            }
            html += '<img class="img_bg" src="' + imageSrc + '" >';
        }
        html += '<img class="img_user" src="' + story.user.pic + '" >';

        html += '<div class="u" style="bottom: 0; position: absolute; width: 100%; background: rgba(222, 222, 222, 0.5); margin-top: 26px;">';
        if (story.user.icon) {
            html += '<img class="object-fit" src="' + story.user.icon + '" style="min-height:14px;max-height:20px;max-width:64px;">';
        } else {
            html += '<span>' + story.user.dec + '</span>';
        }
        html += '</div>';

        html += '</div>';

        return html;
    }

    this.updateStoryItem = function (context, user_id) {
        const storyItem = window.storyBoard.find('.story-board--item[data-user="' + user_id + '"]');
        if (!storyItem || !storyItem.length) return;

        const story = context.stories.find(str => str.user_id == user_id);
        if (!story) return;

        story.user = context.findUser(context, story.user.dec, story.user.hash);
        if (!story.user) return;

        let imageSrc = story.user.pic;
        if (story.type == "photo") {
            imageSrc = context.URL + "/uploads/story/photos/" + story.file;
        } else if (story.type == "video") {
            imageSrc = context.URL + "/uploads/story/videos/" + story.file;
        }

        let html = "";

        if (story.type == "video") {
            html += '<video class="img_bg" src="' + imageSrc + '" ></video>';
        } else {
            html += '<img class="img_bg" src="' + imageSrc + '" >';
        }
        html += '<img class="img_user" src="' + story.user.pic + '" >';
        html += '<span class="user_name ellipsis" >' + story.user.dec + '</span>';

        storyItem.html(html);
    }

    this.registerStoryItemEvents = function (context) {
        context.openStory(context);
    }

    this.openStory = function (context) {
        window.storyBoard.find(".story-board--item:not(.add)").unbind("click").on("click", (e) => {
            context.renderStoryModal(context, e.target.parentElement.dataset.user);
        });
    }

    this.getMediaDuration = function (type) {
        const DEFAULT_PHOTO_DURATION = 7;
        const DEFAULT_MEDIA_DURATION = 20;
        return type == "photo" ? DEFAULT_PHOTO_DURATION : DEFAULT_MEDIA_DURATION;
    }

    this.renderStoryReactions = function (context, story) {
        if (!context.mUser.likedStories) context.mUser.likedStories = [];
        let html = '<div class="story-reactions" data-id="' + story.id + '">';

        const likedClass = context.mUser.likedStories.indexOf(story.id) >= 0 ? "liked" : "";
        story.likes = story.likes ? story.likes : 0;
        story.commentsCount = story.commentsCount ? story.commentsCount : 0;
        story.viewsCount = story.viewsCount ? story.viewsCount : 0;

        html += '<div class="likes_wrapper">';
        html += '<span class="fa fa-heart ' + likedClass + '"></span>';
        html += '<span class="likes">' + story.likes + '</span>';
        html += '</div>';

        html += '<div class="comments_wrapper">';
        html += '<span class="fa fa-commenting"></span>';
        html += '<span class="comments">' + story.commentsCount + '</span>';
        html += '</div>';

        if (story.user.dec == context.mUser.dec && story.user.hash == context.mUser.hash) {
            html += '<div class="views_wrapper">';
            html += '<span class="fa fa-eye"></span>';
            html += '<span class="views">' + story.viewsCount + '</span>';
            html += '</div>';
        }

        html += '</div>';

        return html;
    }

    this.unpauseStoryModal = function () {
        window.storyModal.find(".story-viewer").removeClass("paused");

        let mediaEleemnt = null;
        mediaEleemnt = window.storyModal.find(".slides .item.active video");
        if (mediaEleemnt[0]) return mediaEleemnt[0].play();

        mediaEleemnt = window.storyModal.find(".slides .item.active audio");
        if (mediaEleemnt[0]) return mediaEleemnt[0].play();
    }

    this.pauseStoryModal = function () {
        window.storyModal.find(".story-viewer").addClass("paused");

        let mediaEleemnt = null;
        mediaEleemnt = window.storyModal.find(".slides .item.active video");
        if (mediaEleemnt[0]) return mediaEleemnt[0].pause();

        mediaEleemnt = window.storyModal.find(".slides .item.active audio");
        if (mediaEleemnt[0]) return mediaEleemnt[0].pause();
    }

    this.onLeftClick = function (context) {
        window.storyModal.find(".story-viewer").toggleClass("paused", false);
        const storyActivePointer = window.storyModal.find(".slides-pointers span.active");
        if (!storyActivePointer || !storyActivePointer.length) return;
        const storyIndex = parseInt(storyActivePointer[0].dataset.index);
        const animation = storyActivePointer.find("b")[0].getAnimations()[0];
        if (!animation) return;
        storyActivePointer.removeClass("seen");
        if (animation.currentTime < 1000 && storyIndex > 0) {
            animation.cancel();
            return this.goToPreviousSlide(storyIndex);
        }
        animation.cancel();
        this.restartCurrentSlide(animation, storyIndex);
    }

    this.onRightClick = function (context) {
        window.storyModal.find(".story-viewer").toggleClass("paused", false);
        const storyActivePointer = window.storyModal.find(".slides-pointers span.active");
        if (!storyActivePointer || !storyActivePointer.length) return;
        const storyIndex = parseInt(storyActivePointer[0].dataset.index);
        const animation = storyActivePointer.find("b")[0].getAnimations()[0];
        if (!animation) return;
        animation.cancel();
        return this.goToNextSlide(storyIndex);
    }

    this.restartCurrentSlide = function (animation, storyIndex) {
        animation.play();

        const currentSlide = window.storyModal.find(".slides .item[data-index='" + storyIndex + "']");
        if (currentSlide && currentSlide.length) {
            if (currentSlide[0].dataset.type == "audio" || currentSlide[0].dataset.type == "video") {
                currentSlide.find(currentSlide[0].dataset.type)[0].currentTime = 0;
            }
        }
    }

    this.goToNextSlide = function (currentIndex) {
        this.stopSlide(currentIndex, true);
        this.playSlide(this, currentIndex + 1);
    }

    this.goToPreviousSlide = function (currentIndex) {
        this.stopSlide(currentIndex, false);
        this.playSlide(this, currentIndex - 1);
    }

    this.stopSlide = function (index, markAsSeen) {
        if (index < 0) return;
        const pointer = window.storyModal.find(".slides-pointers span[data-index='" + index + "']");
        if (!pointer || !pointer.length) return;
        pointer.removeClass("active");
        if (!markAsSeen) {
            pointer.removeClass("seen");
        } else {
            pointer.addClass("seen");
        }

        const slide = window.storyModal.find(".slides .item[data-index='" + index + "']");
        slide.addClass("seen").removeClass("active");
        if (slide[0].dataset.type == "audio" || slide[0].dataset.type == "video") {
            slide.find(slide[0].dataset.type)[0].pause();
            slide.find(slide[0].dataset.type)[0].currentTime = 0;
        }
    }

    this.playSlide = function (context, index) {
        if (index < 0) return;
        if (!context.mUser.likedStories) context.mUser.likedStories = [];
        const pointer = window.storyModal.find(".slides-pointers span[data-index='" + index + "']");
        if (!pointer || !pointer.length) {
            return this.closeStoryModal();
        }
        pointer.addClass("active").removeClass("seen");

        const slide = window.storyModal.find(".slides .item[data-index='" + index + "']");
        if (slide && slide.length) {
            slide.addClass("active").removeClass("seen");
            const storyReactions = slide.find(".story-reactions");
            storyReactions.find(".likes_wrapper .fa").toggleClass("liked", context.mUser.likedStories.indexOf(storyReactions.data("id")) >= 0);
            context.viewStory(context, storyReactions.data("id"));
            if (slide[0].dataset.type == "audio" || slide[0].dataset.type == "video") {
                slide.find(slide[0].dataset.type)[0].muted = false;
                slide.find(slide[0].dataset.type)[0].play();
            }
        }

        window.storyModal.find(".time").text(this.timeAgo(new Date(slide[0].dataset.created).getTime()));
    }

    this.viewStory = function (context, id) {
        if (!context.mUser.viewedStories) context.mUser.viewedStories = [];
        if (context.mUser.viewedStories && context.mUser.viewedStories.indexOf(id) >= 0) return;
        const story = context.stories.find(story => story.id == id);
        if (!story || (story.user.dec == context.mUser.dec && story.user.hash == context.mUser.hash)) return;
        context.socket.emit("req", { a: "str:view", d: { id, uid: myid, user: context.mUser, t: context.mUser.token } }, res => {
            context.mUser.viewedStories.push(id);
        });
    }

    this.timeAgo = function (time) {
        const s = Math.round(Math.abs(Date.now() - time) / 1000);

        if (s < 59) {
            return "ط§ظ„ط¢ظ†";
        } else if (s / 60 < 60) {
            return parseInt(s / 60) + "ط¯";
        } else if (s / 3600 < 24) {
            return parseInt(s / 3600) + "ط³";
        } else if (s / (3600 * 24) < 30) {
            return parseInt(s / (3600 * 24)) + "ظٹ";
        } else if (s / (3600 * 24 * 30) < 12) {
            return parseInt(s / (3600 * 24 * 30)) + "ط´";
        } else {
            return parseInt(s / (3600 * 24 * 30 * 12)) + "ط¹";
        }

    }

    this.closeStoryModal = function () {
        window.storyModal.addClass("closed");
        setTimeout(() => {
            window.storyModal.remove();
        }, 500);
    }

    this.registerStoryModalEvents = function (context) {
        context.onStoryModalClick(context);
        context.onStoryModalClose(context);
        context.onStoryModalRemove(context);
        context.onStoryModalAnimationEnded(context);
        context.onStoryModalMediaMetaDataLoaded(context);
    }

    this.onStoryModalClick = function (context) {
        window.storyModal.unbind("click").on("click", function (e) {
            if ($(this).closest("#story-comments").length) return;
            const thirdWidth = (window.storyModal.width() / 3);
            if (e.clientX <= thirdWidth) {
                context.onLeftClick(context);
            } else if (e.clientX >= (thirdWidth * 2)) {
                context.onRightClick(context);
            } else {
                const isPaused = window.storyModal.find(".story-viewer").hasClass("paused");
                if (isPaused) {
                    context.unpauseStoryModal();
                } else {
                    context.pauseStoryModal();
                }
            }
        });
    }

    this.onStoryModalClose = function (context) {
        window.storyModal.find(".back, .close").unbind("click").on("click", e => {
            e.stopPropagation();
            this.closeStoryModal();
        });
    }

    this.onStoryModalRemove = function (context) {
        window.storyModal.find(".remove").unbind("click").on("click", e => {
            e.stopPropagation();
            if (!confirm("ظ‡ظ„ ط£ظ†طھ ظ…طھط£ظƒط¯ ظ…ظ† ط­ط°ظپ ط§ظ„ط³طھظˆط±ظٹطں")) return;
            const storyActivePointer = window.storyModal.find(".slides-pointers span.active");
            if (!storyActivePointer || !storyActivePointer.length) return;
            context.socket.emit("req", { a: "str:del", d: { uid: myid, t: context.mUser.token, id: storyActivePointer[0].dataset.id } }, res => {
                if (typeof res == "string") return alert(res);
                if (res.error == false) {
                    context.onRemoveStory(context, res.id);
                }
            });
        });
    }

    this.onStoryModalAnimationEnded = function (context) {
        window.storyModal.find(".slides-pointers b").unbind("animationend").on("animationend", e => {
            if (!e.target || !e.target.parentElement) return;
            const currentIndex = parseInt(e.target.parentElement.dataset.index);
            if (isNaN(currentIndex)) return context.closeStoryModal();
            context.stopSlide(currentIndex, true);
            context.playSlide(context, currentIndex + 1);
        });
    }

    this.onStoryModalMediaMetaDataLoaded = function (context) {
        window.storyModal.find(".slides audio, .slides video").unbind("loadedmetadata").on("loadedmetadata", e => {
            e.target.dataset.duration = e.target.duration;
            if (e.target.duration > 180) {
                window.storyModal.find(".slides-pointers span[data-id='" + e.target.dataset.id + "'] b").css("animation-duration", "180s");
            } else {
                window.storyModal.find(".slides-pointers span[data-id='" + e.target.dataset.id + "'] b").css("animation-duration", (e.target.duration) + "s");
            }
        });
    }

    this.registerStoryReactionsEvents = function (context) {
        context.onStoryReactionLike(context);
        context.onStoryReactionComment(context);
        context.onStoryReactionView(context);
    }

    this.onStoryReactionLike = function (context) {
        if (!window.storyModal) return;
        window.storyModal.find(".likes_wrapper .fa").unbind("click").on("click", function (e) {
            e.stopPropagation();
            const story = $(this).closest(".item");
            if (!story || !story.length) return;
            context.likeStory(context, story.data("id"));
        });
    }

    this.onStoryReactionComment = function (context) {
        if (!window.storyModal) return;
        window.storyModal.find(".comments_wrapper .fa").unbind("click").on("click", function (e) {
            e.stopPropagation();
            const story = $(this).closest(".item");
            if (!story || !story.length) return;
            context.commentStory(context, story.data("id"));
        });
    }

    this.onStoryReactionView = function (context) {
        if (!window.storyModal) return;
        window.storyModal.find(".views_wrapper .fa").unbind("click").on("click", function (e) {
            e.stopPropagation();
            const story = $(this).closest(".item");
            if (!story || !story.length) return;
            context.pauseStoryModal();
            context.renderStoryViews(context, story.data("id"));
        });
    }

    this.likeStory = function (context, id) {
        if (!window.storyModal) return;
        context.socket.emit("req", { a: "str:like", d: { id, uid: myid } }, res => {
            if (typeof res == "string") return alert(res);
            if (res.error && res.data && res.data.notFound) {
                context.onRemoveStory(context, res.data.id, res.data.by);
            } else {
                context.onLikeStory(context, res.data);
            }
        });
    }

    this.commentStory = function (context, id) {
        if (!window.storyModal) return;
        context.pauseStoryModal();
        context.renderStoryComments(context, id);
    }

    this.onRemoveStory = function (context, id, by) {

        const story = context.stories.find(story => story.id == id);
        if (!story) return;

        const byUser = context.findUserById(context, by);
        if (byUser && by != myid && story.user.dec == context.mUser.dec && story.user.hash == context.mUser.hash) {
            renderNotification(byUser, "ظ‚ط§ظ… ط¨ط­ط°ظپ ط§ظ„ط³طھظˆط±ظٹ ط§ظ„ط®ط§طµ ط¨ظƒ", null, "remove");
        }

        context.onStoryModalRemoveStory(context, id);

        context.stories = context.stories.filter(str => str.id != story.id);
        if (context.mUserlikedStories) {
            context.mUser.likedStories = context.mUser.likedStories.filter(story_id => story_id != id);
        }

        if (!context.stories.find(str => str.user_id == story.user_id)) {
            window.storyBoard.find('.story-board--item[data-user="' + story.user_id + '"]').remove();
        } else {
            context.updateStoryItem(context, story.user_id);
        }
    }

    this.setStoryLikes = function (context, story_id) {
        if (!window.storyModal) return;
        const story = context.stories.find(story => story.id == story_id);
        if (!story) return;
        const likes = story.likes ? story.likes : 0;
        const storyReactions = window.storyModal.find(".story-reactions[data-id='" + story_id + "']");
        if (!storyReactions || !storyReactions.length) return;
        storyReactions.find(".likes").text(likes);
        return storyReactions;
    }

    this.onLikeStory = function (context, data) {

        context.stories = context.stories.map(story => {
            if (story.id == data.id) {
                story.likes = data.liked ? story.likes + 1 : story.likes - 1;
                if (!story.likes) story.likes = 0;
            }
            return story;
        });

        const storyReactions = context.setStoryLikes(context, data.id);
        if (data.by == myid) {
            if (!context.mUser.likedStories) context.mUser.likedStories = [];
            if (data.liked) {
                context.mUser.likedStories.push(data.id);
            } else {
                context.mUser.likedStories = context.mUser.likedStories.filter(story_id => story_id != data.id);
            }
            if (storyReactions) storyReactions.find(".fa").toggleClass("liked", data.liked);
        }

        const byUser = context.findUserById(context, data.by);
        if (byUser && data.by != myid && data.story_user && data.story_user.dec == context.mUser.dec && data.story_user.hash == context.mUser.hash && data.liked) {
            renderNotification(byUser, "ظ‚ط§ظ… ط¨ط§ظ„ط¥ط¹ط¬ط§ط¨ ط¨ط§ظ„ط³طھظˆط±ظٹ ط§ظ„ط®ط§طµ ط¨ظƒ", null, "like");
        }
    }

    this.onCommentStory = function (context, data) {
        const story = context.stories.find(story => story.id == data.story_id);
        if (!story) return;

        data.comment.user = this.findUserById(context, data.by);
        context.addStoryComment(context, data.comment);

        this.renderComment(this, data.comment);
        this.incStoryCommentsCount(context, data.story_id);

        if (data.comment.user && data.comment.storyOwner.hash == context.mUser.hash && data.comment.storyOwner.dec == context.mUser.dec) {
            renderNotification(data.comment.user, "ظ‚ط§ظ… ط¨ط§ظ„طھط¹ظ„ظٹظ‚ ط¹ظ„ظ‰ ط§ظ„ط³طھظˆط±ظٹ ط§ظ„ط®ط§طµ ط¨ظƒ", data.comment.comment, "comment");
        }
    }

    this.onLikeCommentStory = function (context, data) {
        const story = context.stories.find(story => story.id == data.comment.story_id);
        if (!story) return;

        context.incStoryCommentLikes(data.comment.id);
        if (story.comments) {
            const comment = story.comments.find(comment => comment.id == data.comment.id);
            comment.likes += 1;
        }

        const byUser = context.findUserById(context, data.by);
        if (byUser && data.comment.user.dec == context.mUser.dec && data.comment.user.hash == context.mUser.hash) {
            context.renderNotification(byUser, "ظ‚ط§ظ… ط¨ط§ظ„ط¥ط¹ط¬ط§ط¨ ط¨طھط¹ظ„ظٹظ‚ظƒ ط¹ظ„ظ‰ ط§ظ„ط³طھظˆط±ظٹ", null, "like");
        }
    }

    this.onRemoveCommentStory = function (context, data) {
        const story = context.stories.find(story => story.id == data.story_id);
        if (!story) return;
        context.removeComment(context, data.story_id, data.id);
        context.decStoryCommentsCount(context, data.story_id);
    }

    this.incStoryCommentLikes = function (comment_id) {
        if (!window.storyModal) return;
        const button = window.storyModal.find("#story-comments .story-comments--comment[data-id='" + comment_id + "'] .story-comments--comment--like");
        if (button) {
            const val = parseInt(button.text()) + 1;
            button.text(val);
        }
    }

    this.incStoryCommentsCount = function (context, story_id) {
        const story = context.stories.find(story => story.id == story_id);
        if (story) {
            if (!story.commentsCount) story.commentsCount = 0;
            story.commentsCount = story.commentsCount + 1;
        }
        if (!window.storyModal) return;
        const comments = window.storyModal.find(".story-reactions[data-id='" + story_id + "'] .comments_wrapper .comments");
        if (comments && comments.length) {
            const text = +comments.text() + 1;
            if (!text) text = 0;
            comments.text(text);
            $("#story-comments[data-id='" + story_id + "'] #comments-count-wrapper .comments-count").text(text);
        }
    }

    this.removeComment = function (context, story_id, comment_id) {
        const story = context.stories.find(story => story.id == story_id);
        if (story && story.comments) {
            story.comments = story.comments.filter(comment => comment.id != comment_id);
        }

        if (!window.storyModal) return;
        window.storyModal.find("#story-comments .story-comments--comment[data-id='" + comment_id + "']").remove();
    }

    this.decStoryCommentsCount = function (context, story_id) {
        const story = context.stories.find(story => story.id == story_id);
        if (story) {
            if (!story.commentsCount) story.commentsCount = 0;
            story.commentsCount = story.commentsCount - 1;
        }
        if (!window.storyModal) return;
        const comments = window.storyModal.find(".story-reactions[data-id='" + story_id + "'] .comments_wrapper .comments");
        if (comments && comments.length) {
            let text = +comments.text() - 1;
            if (!text) text = 0;
            comments.text(text);
            $("#story-comments[data-id='" + story_id + "'] #comments-count-wrapper .comments-count").text(text);
        }
    }

    this.incStoryViewsCount = function (context, story_id) {
        const story = context.stories.find(story => story.id == story_id);
        if (story) {
            if (!story.viewsCount) story.viewsCount = 0;
            story.viewsCount = story.viewsCount + 1;
        }
        if (!window.storyModal) return;
        const views = window.storyModal.find(".story-reactions[data-id='" + story_id + "'] .views_wrapper .views");
        if (views && views.length) {
            const text = +views.text() + 1;
            if (!text) text = 0;
            views.text(text);
            $("#story-views[data-id='" + story_id + "'] #views-count-wrapper .views-count").text(text);
        }
    }

    this.onViewStory = function (context, data) {
        const story = context.stories.find(story => story.id == data.story_id);
        if (!story) return;

        const view = {
            id: data.id,
            story_id: data.story_id,
            time: Date.now(),
            user: this.findUserById(context, data.by)
        }

        context.addStoryView(context, view);
        context.renderView(context, view);
        context.incStoryViewsCount(context, data.story_id);

        if (view.user && data.storyOwner.dec == context.mUser.dec && data.storyOwner.hash == context.mUser.hash) {
            context.renderNotification(view.user, "ظ‚ط§ظ… ط¨ظ…ط´ط§ظ‡ط¯ط© ط§ظ„ط³طھظˆط±ظٹ ط§ظ„ط®ط§طµ ط¨ظƒ", null, "view");
        }
    }

    this.onStoryModalRemoveStory = function (context, id) {
        const story = context.stories.find(story => story.id == id);
        if (!story || !window.storyModal) return;
        const pointer = window.storyModal.find(".slides-pointers span[data-id='" + id + "']");
        if (pointer && pointer.length) {
            if (pointer.hasClass("active")) {
                return context.closeStoryModal();
            }
        }
        pointer.remove();
        window.storyModal.find(".slides .item[data-id='" + id + "']").remove();
    }

    this.renderNotificationEmoji = function (type) {
        if (type == "like") {
            return 'â‌¤ï¸ڈ';
        } else if (type == "comment") {
            return 'ًں’¬';
        } else if (type == "view") {
            return 'ًں‘€';
        } else if (type == "remove") {
            return 'â‌Œ';
        } else {
            return '';
        }
    }

    this.renderNotification = function (user, message, text, type) {
        let html = '';
        html += '<div onclick="$(this).remove();" style="min-width:180px;max-width:260px;border:1px solid black;z-index:2110;background-color:#efefef;position:absolute;top:30%;margin-left:30px;padding:5px; " class="hand corner nosel">';
        html += '<center>';
        html += '<div class="corner border label label-primary" style="padding-top:6px;padding-left:15px;width:50%;padding-right:15px;">طھظ†ط¨ظٹظ‡</div>';
        html += '</center>';
        html += '<div class="fl borderg corner uzr d-flex" style="width:100%;padding:2px;">';
        html += '<img src="' + user.pic + '" style="width:24px;height:22px;" class="fl">';
        if (user.icon) {
            html += '<img class="u-ico fl " src="' + user.icon + '" style="max-height:18px;">';
        }
        html += '<div style="max-width: 80%;" class="dots nosel u-topic fl flex-grow-1">' + user.dec + '</div>';
        html += '<span class="fr" style="color:grey;font-size:70%!important;">#' + user.hash + '</span>';
        html += '</div>';
        html += '<div style="font-size:14px!important;dth:100%;display:block;padding:0px 5px;overflow:hidden;" class="break m fl">';
        html += message + " ";
        html += this.renderNotificationEmoji(type);
        html += '</div>'
        if (text) {
            html += '<div style="width:100%;display:block;padding:0px 5px;overflow:hidden;" class="break m fl">' + text + '</div>';
        }
        html += '</div>';

        $("body").append(html);
    }

    this.renderStoryComments = function (context, story_id) {
        if ($("#story-comments").length) return;
        const story = context.stories.find(story => story.id == story_id);
        if (!story) return;

        story.commentsCount = story.commentsCount ? story.commentsCount : 0;

        let html = '<div id="story-comments" data-id="' + story_id + '">';

        html += '<div id="story-comments-container">';

        html += '<div id="story-comments-header">';
        html += '<span id="comments-count-wrapper" dir="rtl"><span class="comments-count">' + story.commentsCount + '</span> طھط¹ظ„ظٹظ‚ </span>';
        html += '<span class="fa fa-times" id="story-comments-close"></span>';
        html += '</div>';

        html += '<div id="story-comments-body">';

        html += '</div>';

        html += '<div id="story-comments-footer">';
        html += "<form class='story-comments-form'>";
        html += "<textarea id='story-comments-form--input' class='border-color story-comments-form--input' name='message' placeholder='ط£ظƒطھط¨ طھط¹ظ„ظٹظ‚ظƒ ظ‡ظ†ط§' dir='rtl'></textarea>";
        html += "<button class='border-color fa fa-send btn btn-primary story-comments-form--send'>ط¥ط±ط³ط§ظ„</button>";
        html += "</form>";
        html += '</div>';

        html += '</div>';

        html += '</div>';

        window.storyModal[0].insertAdjacentHTML("beforeend", html);
        context.setStoryCommentsModalTop();
        context.renderComments(context, story_id);
        context.registerStoryCommentsEvents(context);
    }

    this.onStoryCommentsInputSubmit = function () {
        $("#story-comments-form--input").unbind("keydown").on("keydown", function (event) {
            if (event.which === 13) {
                if (!event.repeat) {
                    const newEvent = new Event("submit", { cancelable: true });
                    event.target.form.dispatchEvent(newEvent);
                }
                event.preventDefault(); // Prevents the addition of a new line in the text field
            }
        });
    }

    this.sendStoryComment = function (context) {
        if (!window.storyModal) return;
        window.storyModal.find("#story-comments-footer form").unbind("submit").on("submit", function (e) {
            e.preventDefault();

            if (window.rscl && window.rscl > context.getCurrentUserLikes()) return alert("ظٹط¬ط¨ ط£ظ† طھطھظˆظپط± ط¹ظ„ظ‰ " + window.rscl + " ط¥ط¹ط¬ط§ط¨ ط­طھظٹ ظٹظ…ظƒظ†ظƒ ط£ط¶ط§ظپط© طھط¹ظ„ظٹظ‚");

            const messageInput = e.target.message;
            const message = messageInput.value.trim();
            if (message) {
                messageInput.value = "";
                const id = $(this).closest("#story-comments").data("id");

                context.socket.emit("req", { a: "str:comment", d: { id, uid: myid, message, user: context.mUser } }, res => {
                    if (typeof res == "string") return alert(res);
                    if (res.error && res.data && res.data.notFound) {
                        context.onRemoveStory(context, res.data.id, res.data.by);
                    }
                });

            }
        });
    }

    this.renderComment = function (context, comment) {
        const story = context.stories.find(story => story.id == comment.story_id);
        if (!story) return "";

        const storyCommentsDialog = $("#story-comments[data-id='" + comment.story_id + "']");
        if (!storyCommentsDialog) return;
        const storyCommentsDialogBody = storyCommentsDialog.find("#story-comments-body")[0];
        if (!storyCommentsDialogBody) return;

        let html = "<div class='story-comments--comment' data-id='" + comment.id + "' >";

        html += "<p class='story-comments--comment--avatar'>";
        html += "<img class='radius border border-color' width='30' height='30' src='" + comment.user.pic + "' />";
        html += "</p>";

        html += "<div>";
        html += "<h5 class='story-comments--comment--title'>";
        if (comment.user.icon) {
            html += '<img class="u-ico fl " src="' + comment.user.icon + '" style="max-height:18px;">';
        }
        html += comment.user.dec;
        html += "</h5>";
        html += "<h5 class='story-comments--comment--content'>";
        html += comment.comment;
        html += "</h5>";
        html += "</div>";

        html += "<button data-id='" + comment.id + "' class='story-comments--comment--like fl btn btn-danger fa fa-heart'>" + comment.likes + "</button>";
        if (context.mUser.rm || (story.user.dec == context.mUser.dec && story.user.hash == context.mUser.hash) || (comment.user.dec == context.mUser.dec && comment.user.hash == context.mUser.hash)) {
            html += "<button data-id='" + comment.id + "' data-story-id='" + comment.story_id + "' class='story-comments--comment--remove fl btn btn-danger fa fa-remove'></button>";
        }
        html += "<span class='story-comments--comment--time fr time' data-time='" + comment.time + "'>" + this.timeAgo(comment.time) + "</span>";
        html += "<div class='clear'></div>";

        html += "</div>";

        storyCommentsDialogBody.insertAdjacentHTML("beforeend", html);
        context.scrollCommentsToBottom();
        context.registerStoryCommentsEvents(context);

    }

    this.renderComments = function (context, story_id) {
        const story = context.stories.find(story => story.id == story_id);
        if (!story) return;
        if (!story.comments) {
            return context.fetchComments(context, story_id);
        }
        story.comments.forEach(comment => {
            context.renderComment(context, comment);
        });
    }

    this.fetchComments = function (context, story_id) {
        context.socket.emit("req", { a: "str:comments", d: { id: story_id } }, res => {
            if (typeof res == "string") return alert(res);
            if (res.error && res.data.notFound) return context.onRemoveStory(context, story_id);
            if (res.error == false) {
                res.data.comments.forEach(comment => {
                    context.addStoryComment(context, comment);
                    context.renderComment(context, comment);
                });
            }
        });
    }

    this.addStoryComment = function (context, comment) {
        const story = context.stories.find(story => story.id == comment.story_id);
        if (story) {
            if (!story.comments) story.comments = [];
            story.comments.push(comment);
        }
    }

    this.scrollCommentsToBottom = function () {
        const element = document.getElementById("story-comments-body");
        if (element) {
            element.scrollTop = element.scrollHeight - element.clientHeight;
        }
    }

    this.registerStoryCommentsEvents = function (context) {
        context.sendStoryComment(context);
        context.onStoryCommentsInputSubmit();
        $("#story-comments, #story-comments *").unbind("click").on("click", function (e) {
            e.stopPropagation();

            if (e.target.id == "story-comments" || e.target.id == "story-comments-close") {
                return context.onCloseStoryComments(context);
            }
            if (e.target.classList.contains("story-comments--comment--like")) {
                return context.onLikeStoryComment(context, e);
            }
            if (e.target.classList.contains("story-comments--comment--remove")) {
                return context.onRemoveStoryComment(context, e);
            }

        });
    }

    this.onCloseStoryComments = function (context) {
        const storyComments = $("#story-comments");
        if (!storyComments.length) return;
        const storyCommentsContainer = storyComments.find("#story-comments-container");
        storyCommentsContainer.css("top", "100vh");
        setTimeout(() => {
            storyComments.remove();
        }, 200);
        context.unpauseStoryModal();
    }

    this.onLikeStoryComment = function (context, e) {
        const id = e.target.dataset.id;
        context.socket.emit("req", { a: "str:comment:like", d: { id, uid: myid } }, res => {
            if (typeof res == "string") return alert(res);
        });
    }

    this.onRemoveStoryComment = function (context, e) {
        const id = e.target.dataset.id;
        const postId = e.target.dataset.postId;
        context.socket.emit("req", { a: "str:comment:del", d: { id, postId, uid: myid, t: context.mUser.token, d: context.mUser.dec, h: mUser.hash } }, res => {
            if (typeof res == "string") return alert(res);
        });
    }

    this.setStoryCommentsModalTop = function () {
        const storyComments = $("#story-comments");
        if (!storyComments.length) return;
        const storyCommentsContainer = storyComments.find("#story-comments-container");
        const documentHeight = $(document).height();
        storyCommentsContainer.css("top", (documentHeight - storyCommentsContainer.height()) + "px");
    }

    this.setStoryViewsModalTop = function () {
        const storyViews = $("#story-views");
        if (!storyViews.length) return;
        const storyViewsContainer = storyViews.find("#story-views-container");
        const documentHeight = $(document).height();
        storyViewsContainer.css("top", (documentHeight - storyViewsContainer.height()) + "px");
    }

    this.renderViews = function (context, story) {
        if (!story.views) {
            return context.fetchViews(context, story.id);
        }
        story.views.forEach(view => {
            context.renderView(context, view);
        });
    }

    this.fetchViews = function (context, story_id) {
        this.socket.emit("req", { a: "str:views", d: { t: context.mUser.token, id: story_id } }, res => {
            if (typeof res == "string") return alert(res);
            if (res.error && res.data.notFound) return context.onRemoveStory(context, story_id);
            if (res.error == false) {
                res.data.views.forEach(view => {
                    context.addStoryView(context, view);
                    context.renderView(context, view);
                });
            }
        });
    }

    this.addStoryView = function (context, view) {
        const story = context.stories.find(story => story.id == view.story_id);
        if (story) {
            if (!story.views) story.views = [];
            story.views.push(view);
        }
    }

    this.renderView = function (context, view) {
        const story = context.stories.find(story => story.id == view.story_id);
        if (!story) return "";

        const storyViewsDialog = $("#story-views[data-id='" + view.story_id + "']");
        if (!storyViewsDialog) return;
        const storyViewsDialogBody = storyViewsDialog.find("#story-views-body")[0];
        if (!storyViewsDialogBody) return;

        let html = "<div class='story-views--view' data-id='" + view.id + "' >";

        html += "<p class='story-views--view--avatar'>";
        html += "<img class='radius border border-color' width='30' height='30' src='" + view.user.pic + "' />";
        html += "</p>";

        html += "<div>";
        html += "<h5 class='story-views--view--title'>";
        if (view.user.icon) {
            html += '<img class="u-ico fl " src="' + view.user.icon + '" style="max-height:18px;">';
        }
        html += view.user.dec;
        html += "</h5>";
        html += "</div>";

        html += "<span class='story-views--view--time fr time' data-time='" + view.time + "'>" + this.timeAgo(view.time) + "</span>";
        html += "<div class='clear'></div>";

        html += "</div>";

        storyViewsDialogBody.insertAdjacentHTML("beforeend", html);
        context.scrollViewsToBottom();
        context.registerStoryViewsEvents(context);
    }

    this.scrollViewsToBottom = function () {
        const element = document.getElementById("story-views-body");
        if (element) {
            element.scrollTop = element.scrollHeight - element.clientHeight;
        }
    }

    this.registerStoryViewsEvents = function (context) {
        $("#story-views, #story-views *").unbind("click").on("click", function (e) {
            e.stopPropagation();
            if (e.target.id == "story-views" || e.target.id == "story-views-close") {
                return context.closeStoryViews(context);
            }
        });
    }

    this.closeStoryViews = function (context) {
        const storyViews = $("#story-views");
        if (!storyViews.length) return;
        const storyViewsContainer = storyViews.find("#story-views-container");
        storyViewsContainer.css("top", "100vh");
        setTimeout(() => {
            storyViews.remove();
        }, 200);
        context.unpauseStoryModal();
    }

    this.renderStoryViews = function (context, story_id) {
        if ($("#story-views").length) return;
        const story = context.stories.find(story => story.id == story_id);
        if (!story) return;

        story.viewsCount = story.viewsCount ? story.viewsCount : 0;

        let html = '<div id="story-views" data-id="' + story_id + '">';

        html += '<div id="story-views-container">';

        html += '<div id="story-views-header">';
        html += '<span id="views-count-wrapper" dir="rtl"><span class="view-count">' + story.viewsCount + '</span> ظ…ط´ط§ظ‡ط¯ط© </span>';
        html += '<span class="fa fa-times" id="story-views-close"></span>';
        html += '</div>';

        html += '<div id="story-views-body">';

        html += '</div>';

        html += '</div>';

        html += '</div>';

        window.storyModal[0].insertAdjacentHTML("beforeend", html);
        context.setStoryViewsModalTop();
        context.renderViews(context, story);
        context.registerStoryViewsEvents(context);
    }

    this.renderStoryModal = function (context, user_id) {
        if (window.storyModal) window.storyModal.remove();

        const stories = context.stories.filter(story => story.user_id == user_id);
        if (!stories || !stories.length) return;

        const user = stories[0].user;

        let html = '<div id="story-modal" class="with-cube with-effects" tabindex="1" style="display: none; margin-left: 168px; margin-top: 217px;">';

        html += '<div id="story-modal-content" style="transform: scale(0.95);">';
        html += '<div id="story-modal-slider-stories" class="slider">';

        // Story Viewer
        html += '<div class="story-viewer muted viewing with-back-button" data-story-id="' + user_id + '">';

        // Pause Icon
        html += '<span class="fa fa-pause pause"></span>';

        // Head
        html += '<div class="head">';
        html += '<div class="left">';
        html += '<a class="back">â€¹</a>';
        if (user.icon) {
            html += '<img class="u-ico fl " src="' + user.icon + '" style="max-height:18px;">';
        }
        html += '<span class="item-preview">';
        html += '<img lazy="eager" class="profilePhoto" src="' + user.pic + '">';
        html += '</span>';
        html += '<div class="info">';
        html += user.dec;
        html += '<span class="time">' + this.timeAgo(new Date(stories[0].created_at)) + '</span>';
        html += '</div>';
        html += '</div>';

        html += '<div class="right">';
        html += '<span class="time"></span>';
        html += '<a class="close" tabindex="2">أ—</a>';
        if ((user.dec == context.mUser.dec && user.hash == context.mUser.hash) || context.mUser.rm) {
            html += '<button class="btn btn-danger remove" tabindex="3">ط­ط°ظپ</button>';
        }
        html += '</div>';
        html += '</div>';

        // Slides Pointers
        html += '<div class="slides-pointers">';
        html += '<div class="wrap">';
        stories.forEach((story, index) => {
            const statusClass = index == 0 ? "active" : "";
            html += '<span class="' + statusClass + '" data-index="' + index + '" data-id="' + story.id + '"><b style="animation-duration:' + context.getMediaDuration(story.type) + 's"></b></span>';
        });
        html += '</div>';
        html += '</div>';

        // Slides
        html += '<div class="slides">';

        stories.forEach((story, index) => {
            const statusClass = index == 0 ? "active" : "";
            if (index == 0) context.viewStory(context, story.id);
            html += '<div class="item ' + statusClass + '" data-time="1679332998.385" data-created="' + story.created_at + '" data-type="' + story.type + '" data-index="' + index + '" data-id="' + story.id + '">';
            if (story.type == "photo") {
                html += '<img loading="auto" class="media" src="' + context.URL + '/uploads/story/photos/' + story.file + '">';
            } else if (story.type == "audio") {
                html += '<img loading="auto" class="media" src="' + user.pic + '">';
                html += '<audio muted="false" webkit-playsinline="" playsinline="" loop preload="auto" data-id="' + story.id + '" src="' + context.URL + '/uploads/story/audios/' + story.file + '" audio=""></audio>';
            } else if (story.type == "video") {
                html += '<video class="media" webkit-playsinline="" playsinline="" loop preload="auto" data-id="' + story.id + '" src="' + context.URL + '/uploads/story/videos/' + story.file + '" video=""></video>';
            }
            html += context.renderStoryReactions(context, story);
            html += '</div>';
        });

        html += '</div>';

        html += '</div>';

        html += '</div>';
        html += '</div>';

        html += '</div>';

        document.body.insertAdjacentHTML("beforeend", html);
        window.storyModal = $("#story-modal");
        window.storyModal.show().addClass("animated");

        context.playFirstSlideSound();
        context.registerStoryModalEvents(context);
        context.registerStoryReactionsEvents(context);
    }

    this.playFirstSlideSound = function () {
        const slide = window.storyModal.find(".slides .item[data-index='0']");
        if (slide && slide.length && (slide[0].dataset.type == "audio" || slide[0].dataset.type == "video")) {
            slide.find(slide[0].dataset.type)[0].muted = false;
            slide.find(slide[0].dataset.type)[0].play();
        }
        window.storyModal.find(".time").text(timeAgo(new Date(slide[0].dataset.created).getTime()));
    }

    this.renderStoryBoard = function (context) {

        let html = '<div id="story-board">';

        html += '<div class="story-board--item add">';
        html += '<img class="img_bg" src="' + context.mUser.pic + '" >';
        html += '<div class="plus">';
        html += '<svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">';
        html += '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />';
        html += '</svg>';
        html += '</div>';
        html += '</div>';

        html += "<input id='story-board--item--input' type='file' accept='image/*, video/*, audio/*' style='display: none; position: absolute; left: 9999px' />";

        html += "</div>";

        $(html).insertAfter(usearch);
        window.storyBoard = $("#story-board");
        $("<div id='story-board-seperator'></div>").insertAfter(window.storyBoard);

    }

})();


const PRIMAYR_COLOR = $(d0).css("background-color");

// story board styles
$("style").last().append(`

:root {
    --primary-color: ${PRIMAYR_COLOR};
}

#story-board {
    display: flex;
    overflow-x: auto;
    height: 4.5rem;
    width: 100%;
    padding: 0.2rem;
}

#story-board::-webkit-scrollbar {
    /*display: none;*/
}

#story-board-seperator {
    background-color: var(--primary-color);
    width: 100%;
    height: 1rem;
}

.story-board--item {
    width: 3.3rem;
    min-width: 3.3rem;
    height: 100%;
    cursor: pointer;
    border-radius: 0.4rem;
    background-color: var(--primary-color);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 0.2rem;
}

.story-board--item .img_bg {
    width: 100%;
    height: 75%;
    object-fit: cover;
}

.story-board--item:not(.add) .img_bg {
    height: 100%;
}

.story-board--item img.img_user {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    border-radius: 50%;
    border: 0.11rem solid var(--primary-color);
    width: 1rem;
    height: 1rem;
}

.story-board--item .user_name {
    position: absolute;
    left: 0.1rem;
    bottom: 0.1rem;
    font-size: 0.4rem;
    // color: white;
    text-shadow: -0.0416rem 0.0416rem #303030 !important;
}

.story-board--item .plus {
    background-color: white;
    border-radius: 50%;
    border: 0.167rem solid var(--primary-color);
    position: absolute;
    left: 0.8rem;
    bottom: 0.1rem;
    width: 1.6rem;
}

.story-board--item .plus svg {
    color: var(--primary-color) !important;
    margin-top: 0.2rem;
}

`);


// story modal styles
$("style").last().append(`

@keyframes storySlideTime {
    0% {
        max-width: 0;
   }
    100% {
        max-width: 100%;
   }
}
@keyframes storyLoading {
    0% {
        transform: rotate(0deg);
   }
    100% {
        transform: rotate(360deg);
   }
}
#story-modal {
    outline: 0 !important;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: 100000;
    font-size: 0.5833333333333334rem;
    font-family: inherit;
}
#story-modal-content, #story-modal-content .story-viewer, #story-modal-content .story-viewer > .slides, #story-modal-content .story-viewer > .slides > * {
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    position: absolute;
    overflow: hidden;
}
#story-modal * {
    outline: 0;
}
#story-modal.with-effects {
    transform: scale(0.01);
    transform-origin: top left;
    transition: 0.25s;
}
#story-modal.with-effects.animated {
    transform: scale(1);
    border-radius: 0;
    margin-top: 0 !important;
    margin-left: 0 !important;
}
#story-modal.with-effects.closed {
    transform: translateY(100%);
}
#story-modal .slider {
    width: 300vw;
    height: 100%;
    top: 0;
    bottom: 0;
    left: -100vw;
    position: absolute;
}
#story-modal .slider > * {
    width: 103vw;
    height: 100%;
    top: 0;
    bottom: 0;
    position: absolute;
}
#story-modal .slider > .previous {
    left: 0;
}
#story-modal .slider > .viewing {
    left: 100vw;
}
#story-modal .slider > .next {
    left: 200vw;
}
#story-modal .slider.animated {
    -webkit-transition: -webkit-transform 0.25s linear;
    transition: -webkit-transform 0.25s linear;
    transition: transform 0.25s linear;
    transition: transform 0.25s linear, -webkit-transform 0.25s linear;
}
#story-modal.with-cube #story-modal-content {
    perspective: 1000vw;
    transform: scale(0.95);
    perspective-origin: 50% 50%;
    overflow: visible;
    transition: 0.3s;
}
#story-modal.with-cube .slider {
    transform-style: preserve-3d;
    transform: rotateY(0deg);
}
#story-modal.with-cube .slider > .previous {
    backface-visibility: hidden;
    left: 100vw;
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
}
#story-modal.with-cube .slider > .viewing {
    backface-visibility: hidden;
    left: 100vw;
    transform: translateZ(50vw);
}
#story-modal.with-cube .slider > .next {
    backface-visibility: hidden;
    left: 100vw;
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
}
#story-modal-content .story-viewer.paused.longPress .head, #story-modal-content .story-viewer.paused.longPress .slides-pointers, #story-modal-content .story-viewer.paused.longPress .tip {
    opacity: 0;
}
#story-modal-content .story-viewer.viewing:not(.paused):not(.stopped) .slides-pointers > * > .active > b {
    -webkit-animation-play-state: running;
    animation-play-state: running;
}
#story-modal-content .story-viewer.next {
    z-index: 10;
}
#story-modal-content .story-viewer.viewing {
    z-index: 5;
}
#story-modal-content .story-viewer.previous {
    z-index: 0;
}
#story-modal-content .story-viewer.muted .tip.muted, #story-modal-content .story-viewer.loading .head .loading {
    display: block;
}
#story-modal-content .story-viewer .slides-pagination span {
    position: absolute;
    top: 50vh;
    font-size: 2rem;
    color: #fff;
    line-height: 2rem;
    width: 2rem;
    margin: 0.25rem;
    transform: translateY(-50%);
    z-index: 1;
    text-align: center;
}
#story-modal-content .story-viewer .slides-pagination .previous {
    left: 0;
}
#story-modal-content .story-viewer .slides-pagination .next {
    right: 0;
}
#story-modal-content .story-viewer .slides-pointers {
    display: table;
    table-layout: fixed;
    border-spacing: 0.25rem;
    border-collapse: separate;
    position: absolute;
    width: 100vh;
    max-width: 100%;
    top: 0;
    left: calc(50vw - 50vw);
    right: calc(50vw - 50vw);
    z-index: 100020;
}
#story-modal-content .story-viewer .slides-pointers > * {
    display: table-row;
}
#story-modal-content .story-viewer .slides-pointers > * > * {
    display: table-cell;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.08333333333333333rem;
}
#story-modal-content .story-viewer .slides-pointers > * > .seen {
    background: #fff;
}
#story-modal-content .story-viewer .slides-pointers > * > * > b {
    background: #fff;
    width: auto;
    max-width: 0;
    height: 0.08333333333333333rem;
    display: block;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
    border-radius: 0.08333333333333333rem;
}
#story-modal-content .story-viewer .slides-pointers > * > .active > b {
    -webkit-animation-name: storySlideTime;
    animation-name: storySlideTime;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
}
#story-modal-content .story-viewer .head {
    position: absolute;
    height: 2.3333333333333335rem;
    left: 0;
    right: 0;
    line-height: 2.3333333333333335rem;
    z-index: 100010;
    color: #fff;
    font-size: 0.5833333333333334rem;
    text-shadow: 0.041666666666666664rem 0.041666666666666664rem 0.041666666666666664rem rgba(0, 0, 0, 0.35), 0.041666666666666664rem 0 0.041666666666666664rem rgba(0, 0, 0, 0.35);
    padding: 0.25rem 0.5rem;
}
#story-modal-content .story-viewer .head .item-preview {
    overflow: hidden;
    vertical-align: top;
    background-size: cover;
    width: 1.75rem;
    height: 1.75rem;
    display: inline-block;
    margin-right: 0.375rem;
    border-radius: 50%;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
}
#story-modal-content .story-viewer .head .item-preview img {
    display: block;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}
#story-modal-content .story-viewer .head .time {
    opacity: 0.75;
    font-weight: 500;
    font-size: 0.5416666666666666rem;
}
#story-modal-content .story-viewer .head .left {
    line-height: 1 !important;
    display: inline-block;
    margin: 0.25rem 0;
    background: rgba(222, 222, 222, 0.5);
    padding: 0.1rem 0.4rem;
    border-radius: 2px;
}
#story-modal-content .story-viewer .head .left .info {
    display: inline-block;
    max-width: 30vw;
    vertical-align: middle;
}
#story-modal-content .story-viewer .head .left .info > * {
    width: 100%;
    display: inline-block;
    line-height: 0.875rem;
}
#story-modal-content .story-viewer .head .left .info .name {
    font-weight: 500;
}
#story-modal-content .story-viewer .head .right {
    float: right;
}
#story-modal-content .story-viewer .head .right .close, #story-modal-content .story-viewer .head .back {
    font-size: 2.5rem !important;
    line-height: 2rem;
    cursor: pointer;
    text-align: center;
    color: white;
    opacity: 1;
    margin-top: -0.8rem;
    margin-right: 1rem;
}
#story-modal-content .story-viewer .head .right .remove {
    position: absolute;
    right: 3.5rem;
    top: 0.5rem;
    font-size: 0.8rem !important;
}
#story-modal-content .story-viewer .head .left .back {
    display: none;
    width: 1rem;
    margin: -0.375rem -0.25rem 0 -0.25rem;
}
#story-modal-content .story-viewer .head .right .time {
    display: none;
    margin-right: 1rem !important;
    margin-top: 0 !important;
}
#story-modal-content .story-viewer .head .loading {
    display: none;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.375rem 0;
    border: 0.16666666666666666rem solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-top-color: #fff;
    -webkit-animation: storyLoading 1s infinite linear;
    animation: storyLoading 1s infinite linear;
}
#story-modal-content .story-viewer .head, #story-modal-content .story-viewer .slides-pointers, #story-modal-content .story-viewer .tip {
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
}
#story-modal-content .story-viewer .slides .item {
    display: none;
    overflow: hidden;
    background: #000;
}
#story-modal-content .story-viewer .slides .item:before {
    z-index: 4;
    background: transparent;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}
#story-modal-content .story-viewer .slides .item > .media {
    height: auto;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: auto;
    top: 50%;
}
#story-modal-content .story-viewer .slides .item.active, #story-modal-content .story-viewer .slides .item.active .tip.link {
    display: block;
}
#story-modal-content .story-viewer .tip {
    z-index: 5;
    text-decoration: none;
    display: none;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.6666666666666666rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0.5rem 1rem;
}
#story-modal.rtl {
    direction: rtl;
    left: auto;
    right: 0;
}
#story-modal.rtl.with-effects {
    transform-origin: top right;
}
#story-modal.rtl.with-effects.animated {
    margin-left: auto !important;
    margin-right: 0 !important;
}
#story-modal.rtl .slider {
    left: auto;
    right: -100vw;
}
#story-modal.rtl .slider > .previous {
    left: auto;
    right: 0;
    transform: rotateY(-270deg) translateX(50%);
}
#story-modal.rtl .slider > .viewing {
    left: auto;
    right: 100vw;
}
#story-modal.rtl .slider > .next {
    left: auto;
    right: 200vw;
}
#story-modal.rtl.with-cube .slider > .previous {
    left: auto;
    right: 100vw;
    transform-origin: center right;
}
#story-modal.rtl.with-cube .slider > .viewing {
    left: auto;
    right: 100vw;
    transform: translateZ(50vw);
}
#story-modal.rtl.with-cube .slider > .next {
    left: auto;
    right: 100vw;
    transform-origin: top left;
    transform: rotateY(270deg) translateX(-50%);
}
#story-modal.rtl #story-modal-content .story-viewer .slides-pagination .previous {
    left: auto;
    right: 0;
}
#story-modal.rtl #story-modal-content .story-viewer .slides-pagination .next {
    right: auto;
    left: 0;
}
#story-modal.rtl #story-modal-content .story-viewer .head .item-preview {
    margin-right: auto;
    margin-left: 0.375rem;
}
#story-modal.rtl #story-modal-content .story-viewer .head .right {
    float: left;
}
#story-modal.rtl #story-modal-content .story-viewer .tip {
    left: auto;
    right: 50%;
    transform: translateX(50%);
}
#story-modal #story-modal-content .story-viewer .pause {
    display: none;
    font-size: 3rem;
    color: white;
    position: absolute;
    z-index: 1000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#story-modal #story-modal-content .story-viewer.paused .pause {
    display: inline;
}

`);

// story reactions styles
$("style").last().append(`

@keyframes pulse {
    to {
        transform: scale(1.3);
    }
}

.story-reactions {
    position: absolute;
    left: 0;
    bottom: 7rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

.story-reactions .likes_wrapper,
.story-reactions .comments_wrapper,
.story-reactions .views_wrapper {
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 100000000;
    text-align: center;
    cursor: pointer;
}

.story-reactions .likes_wrapper .fa,
.story-reactions .comments_wrapper .fa,
.story-reactions .views_wrapper .fa {
    font-size: 3rem !important;
    text-shadow: 0.08333333333333333rem 0.08333333333333333rem #000, -0.08333333333333333rem -0.08333333333333333rem #000 !important;
}

.story-reactions .likes_wrapper .likes,
.story-reactions .comments_wrapper .comments,
.story-reactions .views_wrapper .views {
    margin-top: 0;
}

.story-reactions .likes_wrapper .fa.liked {
    color: #f03254;
    animation: pulse 0.2s ease;
}

`);


// story comments modal styles
$("style").last().append(`

#story-comments {
    background-color: #00000066;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

#story-comments-container {
    position: relative;
    margin: 0 auto;
    top: 100vh;
    background-color: white;
    width: 100%;
    max-width: 60%;
    height: 80%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    transition: top 0.2s linear 0s;
    display: flex;
    flex-direction: column;
}

#story-comments-header {
    text-align: center;
    padding: 0.3rem 0.5rem;
}

#story-comments-close {
    float: left;
    cursor: pointer;
}

#story-comments-body {
    overflow: auto;
    flex-grow: 1;
    height: 8rem;
}

#story-comments-footer {
    height: 2rem;
    position: relative;
}

.story-comments-form {
    background: var(--primary-color);
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0.35rem 0.1rem 0.25rem 0.1rem;
}

.story-comments-form--attach {
    margin-right: 0.2em;
    font-size: 0.55rem;
    margin-top: -0.125rem;
    height: 1.125rem;
    border: 0.042rem solid var(--border-color) !important;
  }
  
  .story-comments-form--loading-percent {
    display: none;
    position: absolute;
    text-align: center;
    font-size: 0.5rem;
    top: 0.35rem;
    left: 0.5rem;
  }
  
  .story-comments-form--face {
    margin-right: 0.2em;
    cursor: pointer;
    width: 0.91666666666rem;
    height: 0.91666666666rem;
  }
  
  .story-comments-form--input {
    width: calc(100% - 4rem);
    margin-right: 0.2em;
    vertical-align: middle;
    text-align: left;
    height: 1.55rem;
    margin-top: -0.083rem;
    border: none;

    overflow: hidden;
    resize: none;
    outline: none;

  }

  .story-comments-form--input:focus,
  .story-comments-form--input:active {
    border: none !important;
  }
  
  .story-comments-form--send {
    font-weight: bold;
    margin-top: -0.125rem;
    height: 1.65rem;
    border: 0.042rem solid var(--border-color) !important;
    padding-top: 0 !important;
  }


  .story-comments--comment {
    position: relative;
    background: white;
    border: 0.041666666666666664rem solid lavender;
    margin: 0 0.05rem;
    padding: 0.1rem 0.05rem;
    margin-bottom: -0.041666666666666664rem;
  }

  .story-comments--comment--avatar {
    float: left;
    margin: 0;
    cursor: pointer;
  }

  .story-comments--comment--avatar img {
    border-radius: 50%;
    border-width: 0.041666666666666664rem !important;
    padding: 0.041666666666666664rem;
    width: 2.25rem;
    height: 2.25rem;
  }

.story-comments--comment--title,
.story-comments--comment--content {
  font-size: 0.55rem;
  font-weight: bold;
  padding: 0 0.2em 0 2.8em;
  margin: 0;
  max-width: 93%;
  word-wrap: break-word;
}

.story-comments--comment--title .username__wrapper {
  font-size: 0.55rem;
  padding: 0;
}

.story-comments--comment--content {
  color: black;
  margin: 0.2em 0 0.2em 0;
}

.story-comments--comment--like,
.story-comments--comment--remove {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 0.08333333333333333rem !important;
  font-size: 70% !important;
  font-weight: bold;
}

.story-comments--comment--remove {
    bottom: 1.3rem;
  }
  
.story-comments--comment--time {
    font-size: 0.75rem !important;
    color: black;
    position: absolute;
    top: 0.1em;
    right: 0.1em;
}

`);


// story views modal styles
$("style").last().append(`

#story-views {
    background-color: #00000066;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

#story-views-container {
    position: relative;
    margin: 0 auto;
    top: 100vh;
    background-color: white;
    width: 100%;
    max-width: 60%;
    height: 80%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    transition: top 0.2s linear 0s;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

#story-views-header {
    text-align: center;
    padding: 0.3rem 0.5rem;
}

#story-views-close {
    float: left;
    cursor: pointer;
}

#story-views-body {
    overflow: auto;
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.story-views--view {
    position: relative;
    background: white;
    border: 0.041666666666666664rem solid lavender;
    margin: 0 0.05rem;
    padding: 0.1rem 0.05rem;
    margin-bottom: -0.041666666666666664rem;
}

.story-views--view--avatar {
    float: left;
    margin: 0;
    cursor: pointer;
}

.story-views--view--avatar img {
    border-radius: 50%;
    border-width: 0.041666666666666664rem !important;
    padding: 0.041666666666666664rem;
    width: 2.25rem;
    height: 2.25rem;
}

.story-views--view--title {
    font-size: 0.55rem;
    font-weight: bold;
    padding: 0 0.2em 0 2.8em;
    direction: rtl;
    margin: 0;
    max-width: 93%;
    word-wrap: break-word;
    text-align: left;
}
  
.story-views--view--title .username__wrapper {
    font-size: 0.55rem;
    padding: 0;
}
  
.story-views--view--time {
    font-size: 0.45rem;
    color: black;
    position: absolute;
    top: 0.1em;
    right: 0.1em;
}

`);

console.clear();
