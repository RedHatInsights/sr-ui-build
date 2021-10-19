(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[215],{62568:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/graphqlschema_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){var e=this.createKeywordMapper({keyword:"type|interface|union|enum|schema|input|implements|extends|scalar","storage.type":"Int|Float|String|ID|Boolean"},"identifier");this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};o.inherits(i,r),t.GraphQLSchemaHighlightRules=i})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r,i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);if(r=i.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var l=e.getCommentFoldRange(n,a+r[0].length,1);return l&&!l.isMultiLine()&&(o?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(r=i.match(this.foldingStopMarker))){a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),i=t,a=n.length,l=t+=1,s=e.getLength();++t<s;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(o>c)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=i)break;if(g.isMultiLine())t=g.end.row;else if(o==c)break}l=t}}return new r(i,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),i=e.getLength(),a=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<i;){t=e.getLine(n);var c=l.exec(t);if(c&&(c[1]?s--:s++,!s))break}if(n>a)return new r(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/graphqlschema",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/graphqlschema_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,i=e("./graphqlschema_highlight_rules").GraphQLSchemaHighlightRules,a=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=i,this.foldingRules=new a};o.inherits(l,r),function(){this.lineCommentStart="#",this.$id="ace/mode/graphqlschema"}.call(l.prototype),t.Mode=l})),ace.require(["ace/mode/graphqlschema"],(function(t){e&&(e.exports=t)}))},90252:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};o.inherits(i,r),t.JsonHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,i=e.findMatchingBracket({row:t,column:r});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new o(t,0,t,r-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r,i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);if(r=i.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var l=e.getCommentFoldRange(n,a+r[0].length,1);return l&&!l.isMultiLine()&&(o?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(r=i.match(this.foldingStopMarker))){a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),i=t,a=n.length,l=t+=1,s=e.getLength();++t<s;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(o>c)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=i)break;if(g.isMultiLine())t=g.end.row;else if(o==c)break}l=t}}return new r(i,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),i=e.getLength(),a=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<i;){t=e.getLine(n);var c=l.exec(t);if(c&&(c[1]?s--:s++,!s))break}if(n>a)return new r(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,i=e("./json_highlight_rules").JsonHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,l=e("./behaviour/cstyle").CstyleBehaviour,s=e("./folding/cstyle").FoldMode,c=e("../worker/worker_client").WorkerClient,g=function(){this.HighlightRules=i,this.$outdent=new a,this.$behaviour=new l,this.foldingRules=new s};o.inherits(g,r),function(){this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t);"start"==e&&(t.match(/^.*[\{\(\[]\s*$/)&&(o+=n));return o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new c(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/json"}.call(g.prototype),t.Mode=g})),ace.require(["ace/mode/json"],(function(t){e&&(e.exports=t)}))},12501:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},i.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};o.inherits(i,r),i.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=i})),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./doc_comment_highlight_rules").DocCommentHighlightRules,i=e("./text_highlight_rules").TextHighlightRules,a=t.cFunctions="\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b",l=function(){var e=this.$keywords=this.createKeywordMapper({"keyword.control":"break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using","storage.type":"asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template|char16_t|char32_t","storage.modifier":"const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local","keyword.operator":"and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace","variable.language":"this","constant.language":"NULL|true|false|TRUE|FALSE|nullptr"},"identifier"),t=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,n="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},r.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+t+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:t},{token:"constant.language.escape",regex:n},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function.C99.c",regex:a},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(r,"doc-",[r.getEndRule("start")]),this.normalizeRules()};o.inherits(l,i),t.c_cppHighlightRules=l})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,i=e.findMatchingBracket({row:t,column:r});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new o(t,0,t,r-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r,i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);if(r=i.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var l=e.getCommentFoldRange(n,a+r[0].length,1);return l&&!l.isMultiLine()&&(o?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(r=i.match(this.foldingStopMarker))){a=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),i=t,a=n.length,l=t+=1,s=e.getLength();++t<s;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(o>c)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=i)break;if(g.isMultiLine())t=g.end.row;else if(o==c)break}l=t}}return new r(i,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),i=e.getLength(),a=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<i;){t=e.getLine(n);var c=l.exec(t);if(c&&(c[1]?s--:s++,!s))break}if(n>a)return new r(a,o,n,t.length)}}.call(a.prototype)})),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,i=e("./c_cpp_highlight_rules").c_cppHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,l=(e("../range").Range,e("./behaviour/cstyle").CstyleBehaviour),s=e("./folding/cstyle").FoldMode,c=function(){this.HighlightRules=i,this.$outdent=new a,this.$behaviour=new l,this.foldingRules=new s};o.inherits(c,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e),i=r.tokens,a=r.state;if(i.length&&"comment"==i[i.length-1].type)return o;if("start"==e)(l=t.match(/^.*[\{\(\[]\s*$/))&&(o+=n);else if("doc-start"==e){if("start"==a)return"";var l;(l=t.match(/^\s*(\/?)\*/))&&(l[1]&&(o+=" "),o+="* ")}return o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/c_cpp"}.call(c.prototype),t.Mode=c})),ace.define("ace/mode/protobuf_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){var e=this.createKeywordMapper({"keyword.declaration.protobuf":"message|required|optional|repeated|package|import|option|enum","support.type":"double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes"},"identifier");this.$rules={start:[{token:"comment",regex:/\/\/.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant",regex:"<[^>]+>"},{regex:"=",token:"keyword.operator.assignment.protobuf"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};o.inherits(i,r),t.ProtobufHighlightRules=i})),ace.define("ace/mode/protobuf",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/protobuf_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./c_cpp").Mode,i=e("./protobuf_highlight_rules").ProtobufHighlightRules,a=e("./folding/cstyle").FoldMode,l=function(){r.call(this),this.foldingRules=new a,this.HighlightRules=i};o.inherits(l,r),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/protobuf"}.call(l.prototype),t.Mode=l})),ace.require(["ace/mode/protobuf"],(function(t){e&&(e.exports=t)}))},13202:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/xml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(e){var t="[_:a-zA-ZÀ-￿][-_:.a-zA-Z0-9À-￿]*";this.$rules={start:[{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:["punctuation.instruction.xml","keyword.instruction.xml"],regex:"(<\\?)("+t+")",next:"processing_instruction"},{token:"comment.start.xml",regex:"<\\!--",next:"comment"},{token:["xml-pe.doctype.xml","xml-pe.doctype.xml"],regex:"(<\\!)(DOCTYPE)(?=[\\s])",next:"doctype",caseInsensitive:!0},{include:"tag"},{token:"text.end-tag-open.xml",regex:"</"},{token:"text.tag-open.xml",regex:"<"},{include:"reference"},{defaultToken:"text.xml"}],processing_instruction:[{token:"entity.other.attribute-name.decl-attribute-name.xml",regex:t},{token:"keyword.operator.decl-attribute-equals.xml",regex:"="},{include:"whitespace"},{include:"string"},{token:"punctuation.xml-decl.xml",regex:"\\?>",next:"start"}],doctype:[{include:"whitespace"},{include:"string"},{token:"xml-pe.doctype.xml",regex:">",next:"start"},{token:"xml-pe.xml",regex:"[-_a-zA-Z0-9:]+"},{token:"punctuation.int-subset",regex:"\\[",push:"int_subset"}],int_subset:[{token:"text.xml",regex:"\\s+"},{token:"punctuation.int-subset.xml",regex:"]",next:"pop"},{token:["punctuation.markup-decl.xml","keyword.markup-decl.xml"],regex:"(<\\!)("+t+")",push:[{token:"text",regex:"\\s+"},{token:"punctuation.markup-decl.xml",regex:">",next:"pop"},{include:"string"}]}],cdata:[{token:"string.cdata.xml",regex:"\\]\\]>",next:"start"},{token:"text.xml",regex:"\\s+"},{token:"text.xml",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment.end.xml",regex:"--\x3e",next:"start"},{defaultToken:"comment.xml"}],reference:[{token:"constant.language.escape.reference.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],attr_reference:[{token:"constant.language.escape.reference.attribute-value.xml",regex:"(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"}],tag:[{token:["meta.tag.punctuation.tag-open.xml","meta.tag.punctuation.end-tag-open.xml","meta.tag.tag-name.xml"],regex:"(?:(<)|(</))((?:"+t+":)?"+t+")",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start"}]}],tag_whitespace:[{token:"text.tag-whitespace.xml",regex:"\\s+"}],whitespace:[{token:"text.whitespace.xml",regex:"\\s+"}],string:[{token:"string.xml",regex:"'",push:[{token:"string.xml",regex:"'",next:"pop"},{defaultToken:"string.xml"}]},{token:"string.xml",regex:'"',push:[{token:"string.xml",regex:'"',next:"pop"},{defaultToken:"string.xml"}]}],attributes:[{token:"entity.other.attribute-name.xml",regex:t},{token:"keyword.operator.attribute-equals.xml",regex:"="},{include:"tag_whitespace"},{include:"attribute_value"}],attribute_value:[{token:"string.attribute-value.xml",regex:"'",push:[{token:"string.attribute-value.xml",regex:"'",next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]},{token:"string.attribute-value.xml",regex:'"',push:[{token:"string.attribute-value.xml",regex:'"',next:"pop"},{include:"attr_reference"},{defaultToken:"string.attribute-value.xml"}]}]},this.constructor===i&&this.normalizeRules()};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:["meta.tag.punctuation.tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(<)("+n+"(?=\\s|>|$))",next:[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:t+"start"}]}),this.$rules[n+"-end"]=[{include:"attributes"},{token:"meta.tag.punctuation.tag-close.xml",regex:"/?>",next:"start",onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:["meta.tag.punctuation.end-tag-open.xml","meta.tag."+n+".tag-name.xml"],regex:"(</)("+n+"(?=\\s|>|$))",next:n+"-end"},{token:"string.cdata.xml",regex:"<\\!\\[CDATA\\["},{token:"string.cdata.xml",regex:"\\]\\]>"}])}}).call(r.prototype),o.inherits(i,r),t.XmlHighlightRules=i})),ace.define("ace/mode/behaviour/xml",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=e("../behaviour").Behaviour,i=e("../../token_iterator").TokenIterator;e("../../lib/lang");function a(e,t){return e&&e.type.lastIndexOf(t+".xml")>-1}var l=function(){this.add("string_dquotes","insertion",(function(e,t,n,o,r){if('"'==r||"'"==r){var l=r,s=o.doc.getTextRange(n.getSelectionRange());if(""!==s&&"'"!==s&&'"'!=s&&n.getWrapBehavioursEnabled())return{text:l+s+l,selection:!1};var c=n.getCursorPosition(),g=o.doc.getLine(c.row).substring(c.column,c.column+1),u=new i(o,c.row,c.column),m=u.getCurrentToken();if(g==l&&(a(m,"attribute-value")||a(m,"string")))return{text:"",selection:[1,1]};if(m||(m=u.stepBackward()),!m)return;for(;a(m,"tag-whitespace")||a(m,"whitespace");)m=u.stepBackward();var d=!g||g.match(/\s/);if(a(m,"attribute-equals")&&(d||">"==g)||a(m,"decl-attribute-equals")&&(d||"?"==g))return{text:l+l,selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,o,r){var i=o.doc.getTextRange(r);if(!r.isMultiLine()&&('"'==i||"'"==i)&&o.doc.getLine(r.start.row).substring(r.start.column+1,r.start.column+2)==i)return r.end.column++,r})),this.add("autoclosing","insertion",(function(e,t,n,o,r){if(">"==r){var l=n.getSelectionRange().start,s=new i(o,l.row,l.column),c=s.getCurrentToken()||s.stepBackward();if(!c||!(a(c,"tag-name")||a(c,"tag-whitespace")||a(c,"attribute-name")||a(c,"attribute-equals")||a(c,"attribute-value")))return;if(a(c,"reference.attribute-value"))return;if(a(c,"attribute-value")){var g=s.getCurrentTokenColumn()+c.value.length;if(l.column<g)return;if(l.column==g){var u=s.stepForward();if(u&&a(u,"attribute-value"))return;s.stepBackward()}}if(/^\s*>/.test(o.getLine(l.row).slice(l.column)))return;for(;!a(c,"tag-name");)if("<"==(c=s.stepBackward()).value){c=s.stepForward();break}var m=s.getCurrentTokenRow(),d=s.getCurrentTokenColumn();if(a(s.stepBackward(),"end-tag-open"))return;var h=c.value;if(m==l.row&&(h=h.substring(0,l.column-d)),this.voidElements.hasOwnProperty(h.toLowerCase()))return;return{text:"></"+h+">",selection:[1,1]}}})),this.add("autoindent","insertion",(function(e,t,n,o,r){if("\n"==r){var a=n.getCursorPosition(),l=o.getLine(a.row),s=new i(o,a.row,a.column),c=s.getCurrentToken();if(c&&-1!==c.type.indexOf("tag-close")){if("/>"==c.value)return;for(;c&&-1===c.type.indexOf("tag-name");)c=s.stepBackward();if(!c)return;var g=c.value,u=s.getCurrentTokenRow();if(!(c=s.stepBackward())||-1!==c.type.indexOf("end-tag"))return;if(this.voidElements&&!this.voidElements[g]){var m=o.getTokenAt(a.row,a.column+1),d=(l=o.getLine(u),this.$getIndent(l)),h=d+o.getTabString();return m&&"</"===m.value?{text:"\n"+h+"\n"+d,selection:[1,h.length,1,h.length]}:{text:"\n"+h}}}}}))};o.inherits(l,r),t.XmlBehaviour=l})),ace.define("ace/mode/folding/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/range","ace/mode/folding/fold_mode","ace/token_iterator"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=(e("../../lib/lang"),e("../../range").Range),i=e("./fold_mode").FoldMode,a=e("../../token_iterator").TokenIterator,l=t.FoldMode=function(e,t){i.call(this),this.voidElements=e||{},this.optionalEndTags=o.mixin({},this.voidElements),t&&o.mixin(this.optionalEndTags,t)};o.inherits(l,i);var s=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function c(e,t){return e.type.lastIndexOf(t+".xml")>-1}(function(){this.getFoldWidget=function(e,t,n){var o=this._getFirstTagInLine(e,n);return o?o.closing||!o.tagName&&o.selfClosing?"markbeginend"==t?"end":"":!o.tagName||o.selfClosing||this.voidElements.hasOwnProperty(o.tagName.toLowerCase())||this._findEndTagInLine(e,n,o.tagName,o.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),o=new s,r=0;r<n.length;r++){var i=n[r];if(c(i,"tag-open")){if(o.end.column=o.start.column+i.value.length,o.closing=c(i,"end-tag-open"),!(i=n[++r]))return null;for(o.tagName=i.value,o.end.column+=i.value.length,r++;r<n.length;r++)if(i=n[r],o.end.column+=i.value.length,c(i,"tag-close")){o.selfClosing="/>"==i.value;break}return o}if(c(i,"tag-close"))return o.selfClosing="/>"==i.value,o;o.start.column+=i.value.length}return null},this._findEndTagInLine=function(e,t,n,o){for(var r=e.getTokens(t),i=0,a=0;a<r.length;a++){var l=r[a];if(!((i+=l.value.length)<o)&&c(l,"end-tag-open")&&(l=r[a+1])&&l.value==n)return!0}return!1},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new s;do{if(c(t,"tag-open"))n.closing=c(t,"end-tag-open"),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn();else if(c(t,"tag-name"))n.tagName=t.value;else if(c(t,"tag-close"))return n.selfClosing="/>"==t.value,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length,e.stepForward(),n}while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new s;do{if(c(t,"tag-open"))return n.closing=c(t,"end-tag-open"),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn(),e.stepBackward(),n;c(t,"tag-name")?n.tagName=t.value:c(t,"tag-close")&&(n.selfClosing="/>"==t.value,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length)}while(t=e.stepBackward());return null},this._pop=function(e,t){for(;e.length;){var n=e[e.length-1];if(t&&n.tagName!=t.tagName){if(this.optionalEndTags.hasOwnProperty(n.tagName)){e.pop();continue}return null}return e.pop()}},this.getFoldWidgetRange=function(e,t,n){var o=this._getFirstTagInLine(e,n);if(!o)return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);var i,l=[];if(o.closing||o.selfClosing){c=new a(e,n,o.end.column);for(var s={row:n,column:o.start.column};i=this._readTagBackward(c);){if(i.selfClosing){if(l.length)continue;return i.start.column+=i.tagName.length+2,i.end.column-=2,r.fromPoints(i.start,i.end)}if(i.closing)l.push(i);else if(this._pop(l,i),0==l.length)return i.start.column+=i.tagName.length+2,i.start.row==i.end.row&&i.start.column<i.end.column&&(i.start.column=i.end.column),r.fromPoints(i.start,s)}}else{var c=new a(e,n,o.start.column),g={row:n,column:o.start.column+o.tagName.length+2};for(o.start.row==o.end.row&&(g.column=o.end.column);i=this._readTagForward(c);){if(i.selfClosing){if(l.length)continue;return i.start.column+=i.tagName.length+2,i.end.column-=2,r.fromPoints(i.start,i.end)}if(i.closing){if(this._pop(l,i),0==l.length)return r.fromPoints(g,i.start)}else l.push(i)}}}}).call(l.prototype)})),ace.define("ace/mode/xml",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text","ace/mode/xml_highlight_rules","ace/mode/behaviour/xml","ace/mode/folding/xml","ace/worker/worker_client"],(function(e,t,n){"use strict";var o=e("../lib/oop"),r=e("../lib/lang"),i=e("./text").Mode,a=e("./xml_highlight_rules").XmlHighlightRules,l=e("./behaviour/xml").XmlBehaviour,s=e("./folding/xml").FoldMode,c=e("../worker/worker_client").WorkerClient,g=function(){this.HighlightRules=a,this.$behaviour=new l,this.foldingRules=new s};o.inherits(g,i),function(){this.voidElements=r.arrayToMap([]),this.blockComment={start:"\x3c!--",end:"--\x3e"},this.createWorker=function(e){var t=new c(["ace"],"ace/mode/xml_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("error",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/xml"}.call(g.prototype),t.Mode=g})),ace.require(["ace/mode/xml"],(function(t){e&&(e.exports=t)}))},42270:(e,t,n)=>{e=n.nmd(e),ace.define("ace/theme/monokai",["require","exports","module","ace/lib/dom"],(function(e,t,n){t.isDark=!0,t.cssClass="ace-monokai",t.cssText=".ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}",e("../lib/dom").importCssString(t.cssText,t.cssClass)})),ace.require(["ace/theme/monokai"],(function(t){e&&(e.exports=t)}))}}]);
//# sourceMappingURL=215.bundle.9fff2d71ed1a59437bff.js.map