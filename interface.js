/**
 * Interface (bootstrap)
 * Copyright © 2022 Sergey Chulkov
 * @version 1.0
 * @author Sergey Chulkov
 * License: https://github.com/SergChulcov/UI/blob/main/LICENSE
 * Header required
 */
var SIZE = {
  DEFAULT:'',
  SMALL:'sm',
  MEDIUM:'md',
  LARGe:'lg',
  EXTRA_LARGE:'xl',
  EXTRA_EXTRA_LARGE:'xxl'
};
function iIcon() {};
iIcon.Alert = {
  INFO:'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>',
  SUCCESS:'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>',
  WARNING:'<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>'
};
var ScreenRESPONSE = {
    DEFAULT:'',
    SMALL:'-sm',
    MEDIUM:'-md',
    LARGE:'-lg',
    EXTRA_LARGE:'-xl',
    XXL:'-xxl'
};
function iColor() {};
iColor.Background = {
    PRIMARY_BACKGROUND:'bg-primary',
    SECOND_BACKGROUND:'bg-secondary',
    SUCCESS_BACKGROUND:'bg-success',
    DANGER_BACKGROUND:'bg-danger',
    WARNING_BACKGROUND:'bg-warning',
    INFO_BACKGROUND:'bg-info',
    LIGHT_BACKGROUND:'bg-light',
    LIGHT_DARK:'bg-dark'
};
iColor.Text = {
    WHITE_TEXT:'text-white',
    DARK_TEXT:'dark-text'
};
function iPosition() {};
iPosition.StaticPlace = {
    DEFAULT:Empty,
    TOP_LEFT:'top-0 start-0',
    TOP_CENTER:'top-0 start-50 translate-middle-x',
    TOP_RIGHT:'top-0 end-0',
    MIDDLE_LEFT:'top-50 start-0 translate-middle-y',
    MIDDLE_CENTER:'top-50 start-50 translate-middle',
    MIDDLE_RIGHT:'top-50 end-0 translate-middle-y',
    BOTTOM_LEFT:'bottom-0 start-0',
    BOTTOM_CENTER:'bottom-0 start-50 translate-middle-x',
    BOTTOM_RIGHT:'bottom-0 end-0',
    TOP:'top-0',
    BOTTOM:'bottom-0',
    START:'start-0',
    END:'end-0'
};
iPosition.Position = {
    DEFAULT: Empty,
    STATIC:'position-static',
    RELATIVE:'position-relative',
    ABSOLUTE:'position-absolute',
    FIXED:'position-fixed',
    STICKY:'position-sticky'
};
function iText() {};
iText.Align={
    START:'text-start',
    CENTER:'text-center',
    END:'text-end'
};
iText.AlignScreenSize = function(SIZE, iTextAlign){
    return iTextAlign.replace('-','-'+SIZE+'-');
};
iText.Wrap = {
    WRAP: 'text-wrap',
    BREAK:'text-break',
};
iText.Transform = {
    LOWER_CASE:'text-lowercase',
    UPPER_CASE:'text-uppercase',
    FIRST_UPPER:'text-capitalize'
};
iText.Size = function(size1_6){
    return 'fs-'+size1_6;
};
/*################################################################*/
// Wrapper's
/*#################################################################*/
function iWrap() {
    this.Wrap = null;
};
iWrap.VideoRatio = {
    '1x1': '1x1',
    '4x3': '4x3',
    '16x9': '16x9',
    '21x9': '21x9',
};
iWrap.prototype.Append = function(Elements){
    this.Wrap.appendChilds(Elements);
};
iWrap.prototype.Get = function(){
  return this.Wrap;
};
/*Группа кнопок по вертикали*/
iWrap.prototype.ForButtonsGroupVertical = function (html){
    this.Wrap = CreateElement('div',{class:'btn-group-vertical',role:'group','aria-label':'...'});return this.Wrap;
};
/*Группа кнопок*/
iWrap.prototype.ForButtonsGroup = function (){
    this.Wrap = CreateElement('div',{class:'btn-group',role:'group','aria-label':'...'}); return this.Wrap;
};
iWrap.prototype.SetButtonGroupBig = function(){this.Wrap.classList.add('btn-group-lg');};
iWrap.prototype.SetButtonGroupSmall = function(){this.Wrap.classList.add('btn-group-sm');};
/*Кнопки на всю ширину*/
iWrap.prototype.ForButtonsFullWidth = function () {
    this.Wrap = CreateElement('div',{class:'d-grid gap-2'}); return this.Wrap;
};
/*Кнопки по центру*/
iWrap.prototype.ForButtonsCentered = function (size_12) {
    this.Wrap = CreateElement('div',{class:'d-grid gap-2 col-'+NIS(size_12,'6')+' mx-auto'}); return this.Wrap;
};
/*Кнопки с начала*/
iWrap.prototype.ForButtonsJustifyStart = function () {
    this.Wrap = CreateElement('div',{class:'d-grid gap-2 d-md-block'}); return this.Wrap;
};
/*Кнопки в конце*/
iWrap.prototype.ForButtonsJustifyEnd = function () {
    this.Wrap = CreateElement('div',{class:'d-grid gap-2 d-md-flex justify-content-md-end'}); return this.Wrap;
};
/*Контейнер для обтикания картинки текстом и пространство между левой стороной и правой*/
iWrap.prototype.ClearFix = function () {
    /*<img src="..." class="col-md-6 float-md-end mb-3 ms-md-3" alt="...">*/
    this.Wrap = CreateElement('div',{class:'clearfix'}); return this.Wrap;
};
/*Контейнер для текста и картинок посередине*/
iWrap.prototype.TextCenter = function () {
    this.Wrap = CreateElement('div',{class:'text-center'}); return this.Wrap;
};
/*Контейнер для текста и картинок посередине*/
iWrap.prototype.InputGroup = function () {
    this.Wrap = CreateElement('div',{class:'input-group'}); return this.Wrap;
};
/*Контейнер для отзывчивого видео*/
iWrap.prototype.VideoRation = function (iWrapVideoRatio) {

    this.Wrap = CreateElement('div',{class:'ratio'});
    if(isset(iWrapVideoRatio)){
        iWrapVideoRatio = 'ratio-'+iWrapVideoRatio;
        this.Wrap.classList.add(iWrapVideoRatio);
    };

    return this.Wrap;
};

/*#################################################################*/
// Buttons && LINKs
/*#################################################################*/
/*

*/
function iButton(html, iButtonTag, iButtonType, iButtonStyle, iButtonSize) {
    this.Button = null;
    this.Tag =  NIS(iButtonTag, iButton.Tag.BUTTON);
    this._Type = NIS(iButtonType).toLowerCase();
    this.style = NIS(iButtonStyle, iButton.Style.PRIMARY);
    this.size = NIS(iButtonSize, iButton.Size.NORMAL);
    this._Fill(html);
    this.Dropdown = null;
    this.UserFunc = [];
};
iButton.Tag = {
    BUTTON:'button',
    LINK_A:'a',
    INPUT:'input'
};
iButton.Type = {
    DEFAULT:'default',
    CLOSE:'close',
};
iButton.Size = {
    BIG:'btn-lg',
    NORMAL:'btn-norm',
    SMALL:'btn-sm'
};
iButton.Style = {
    PRIMARY: 'btn-primary', PRIMARY_OUTLINE:'btn-outline-primary',
    SECONDARY: 'btn-secondary', SECONDARY_OUTLINE:'btn-outline-secondary',
    SUCCESS:'btn-success',  SUCCESS_OUTLINE:'btn-outline-success',
    DANGER:'btn-danger',    DANGER_OUTLINE:'btn-outline-danger',
    WARNING:'btn-warning',  WARNING_OUTLINE:'btn-outline-warning',
    INFO:'btn-info',    INFO_OUTLINE:'btn-outline-info',
    LIGHT:'btn-light',  LIGHT_OUTLINE:'btn-outline-light',
    DARK:'btn-dark',    DARK_OUTLINE:'btn-outline-dark',
    LINK:'btn-link'
};
iButton.prototype._Button = function (html) {

    var elem=null;
    if( this._Type==iButton.Type.CLOSE){
        elem = CreateElement(this.Tag,{type:"button", class:'btn-close',"aria-label":""});
    }else{
        elem = CreateElement(this.Tag,{type:"button", class:'btn'});
    };
    elem.EquateHTML(html);
    return elem;
};
iButton.prototype._Fill = function (type, html) {
    this.Button = this._Button(type,html);
    if(this._Type!=iButton.Type.CLOSE){
        this.Button.classList.add(this.style);
    };
    this.Button.classList.add(this.size);
    //this.MakeBlock();
};
iButton.prototype.Append = function(html){
    this.Button = EquateHTML(this.Button, html);
};
iButton.prototype.Get = function(){
    return this.Button;
};
iButton.prototype.GetDropdown = function(){
    return this.Dropdown;
};
iButton.prototype.Disable = function(){this.Button.setAttribute('disabled','');};iButton.prototype.Enable = function(){this.Button.removeAttribute('disabled');};
iButton.prototype.Active = function(){this.Button.classList.add('active');};iButton.prototype.UnActive = function(){this.Button.classList.remove('active');};

iButton.prototype.AddClass = function(Class){
    this.Button.classList.add(Class);
};
iButton.prototype.AddOnClick = function (UserFunc) {
    this.UserFunc.push(UserFunc);
    var This = this;
    this.Button.onclick = function () {
        for(var i=0; i<This.UserFunc.length;i++){
            This.UserFunc[i]();
        };
    };
};
iButton.prototype.OnClick = function (UserFunc) {
    this.Button.onclick = function () {
        UserFunc();
    };
};
iButton.DropDownLink = function(html, ActionOnClick, isBlank){
    var li = CreateElement('li',{});
    var a = CreateElement('a',{class:'dropdown-item'});
    a = EquateHTML(a, html);
    a = AnalyzActionOnClick(a, ActionOnClick, isBlank);

    li.appendChild(a);
    return li;
};
iButton.DropDownSeparatorLine = function(){
    var li = CreateElement('li',{});
    var hr = CreateElement('hr',{class:'dropdown-divider'});
    li.appendChild(hr);
    return li;
};
iButton.prototype.MakeDropDown = function (ArrayiButtonDropDownLink) {
    this.Dropdown = CreateElement('div',{class:'dropdown'});
    this.Button.classList.add('dropdown-toggle');
    this.Button.setAttribute('data-bs-toggle','dropdown');
    this.Button.setAttribute('aria-expanded','false');

    var ul = CreateElement('ul',{class:'dropdown-menu','aria-labelledby':''});
    ul.appendChilds(ArrayiButtonDropDownLink);

    this.Dropdown.appendChilds(this.Button, ul);

    return this.Dropdown;
};
/*Закрытие объекта*/
iButton.prototype.MakeDismiss = function (name) {
    this.Button.setAttribute("data-bs-dismiss",name);
};




/*#################################################################*/
// Inputs && Switches && TextForms
/*#################################################################*/
function iInput() {
    this.Div = CreateElement('div',{class:''});
    this.Group = CreateElement('div',{class:'input-group'});
    this.Label = null;
    this.Input = null;
    this.Description = null;
    this._type_value = iInput._type_value.DEFAULT_VALUE;
    this.ValidType = null;
    this.TextSuccess = null;
    this.TextError = null;
    this.Floating = false;
    this.timeout = null;
    this.Validation = false;
};
iInput.prototype.Get = function(){return this.Div;};
iInput.prototype.GetGroup = function(){return this.Group;};
iInput.prototype.GetInput = function(){return this.Input;};


iInput.InsideLabelPosition = {START:0,END:1};

iInput.InsideLabel = function(html){
    var e = CreateElement('span',{class:'input-group-text'});
    e = EquateHTML(e, html);
    return e;
};
iInput.TypeValidation = {
    TOOLTIP:'tooltip',
    FEEDBACK:'feedback'
};
iInput.prototype.ValidationMethod = function(This){
    return true;
};
iInput.prototype.SetValidationMethod = function(MethodWithThisArg, iInputTypeValidation, HtmlError, HtmlSuccess){
    this.Validation = true;
    this.ValidationMethod = MethodWithThisArg;
    this.ValidType = NIS(iInputTypeValidation, iInput.TypeValidation.FEEDBACK);
    this.TextSuccess = HtmlSuccess;
    this.TextError = HtmlError;

};
iInput.prototype._successText = function(html){
    var d = CreateElement('div',{class:'validation-iterface-dyn valid-'+this.ValidType});
    d.EquateHTML(html);
    if(this.Floating){
        this.Div.appendChild(d);
    }else{
        this.Group.appendChild(d);
    };

};
iInput.prototype._errorText = function(html){
    var d = CreateElement('div',{class:'validation-iterface-dyn invalid-'+this.ValidType});
    d.EquateHTML(html);
    if(this.Floating){
        this.Div.appendChild(d);
    }else{
        this.Group.appendChild(d);
    };
};
iInput.prototype.CheckValidationMethod = function(isScrollToError){
    if(!this.Validation){return true;};
    this.ClearValidation();
    if(this.ValidationMethod(this)===false){
        //is scroll to error
        if(istrue(isScrollToError)){
            $([document.documentElement, document.body]).animate({
                scrollTop: $(this.Input).offset().top
            }, 1400);
        };

        this.Input.AddClass('is-invalid');
        this._errorText(this.TextError);
        return false;
    };

    this.Input.AddClass('is-valid');
    this._successText(this.TextSuccess);
    //show success if not empty
    return true;
};
iInput.prototype.ClearValidation = function(){
    this.Input.RemoveClass('is-invalid','is-valid');
    $(this.Div).find('.validation-iterface-dyn').remove();
};
iInput.prototype.AddInsideLabel = function(iInputInsideLabelPosition, iInputInsideLabel_iButton){
    if(iInputInsideLabelPosition==iInput.InsideLabelPosition.START){
        this.Group.prependChilds(iInputInsideLabel_iButton);
    }else{
        this.Group.appendChilds(iInputInsideLabel_iButton);
    };
    return this.Group;
};
iInput.prototype.TogglePasswordText = function(){
    var type = this.Input.getAttribute('type');
    if(type=='password'){
        this.Input.setAttribute('type','text');
    }else if(type=='text'){
        this.Input.setAttribute('type','password');
    };
};
iInput.prototype.OnChange = function(UserFunc){
    $(this.Input).change(function() {
        UserFunc();
    });
};
iInput.prototype.OnInput = function(UserFunc){
    $(this.Input).on('input', function() {
        UserFunc();
    });
};
iInput.prototype.OnInputTimeOut = function(UserFunc, TimeOut){
    $(this.Input).on('input', function() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(UserFunc, TimeOut);
    });
};


/*Сделать Label внутри input*/
iInput.prototype.MakeFloating = function(){
    this.Div.classList.add('form-floating');
    this.Div.innerHTML = '';
    this.Div.appendChilds(this.Input,this.Label,this.Description);
    this.Floating = true;
};
/*Сделать input под одной линией*/
iInput.prototype.MakeOnLine = function(){
    this.Input.AddClass('oneline');
};
iInput._type_value = {
  DEFAULT_VALUE:'0',
  CHECKED:'1',
  HTML:'2',
  FILES:'3'
};
iInput.Size = {
  BigInput:'form-control-lg',       BigSelect:'form-select-lg',
  NormalInput:'form-control-norm',                   NormalSelect:'form-select-norm',
  SmallInput:'form-control-sm',     SmallSelect:'form-select-sm'
};
iInput.prototype.GetInputValue = function(){
    if(this._type_value==iInput._type_value.CHECKED) {
        return $(this.Input).is(':checked');
    }else
    if(this._type_value==iInput._type_value.FILES){
        return $(this.Input).prop('files');
    }else{
        return $(this.Input).val();
    };
};
iInput.prototype.SetInputValue = function(value){
    return $(this.Input).val(NIS(value,''));
};

iInput.prototype._CreateLabel = function(LabelHTML){
    this.Label = CreateElement('label',{for:'',class:'form-label'});
    this.Label = EquateHTML(this.Label, LabelHTML);
};
iInput.prototype._CreateDescription = function(DescriptionHTML){
    this.Description = CreateElement('div',{class:'form-text'});
    this.Description = EquateHTML(this.Description, DescriptionHTML);
};
iInput.prototype._defInput = function (_type, iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML) {
    _type = NIS(_type);
    this._CreateLabel(LabelHTML);
    this.Input = CreateElement('input',{type:_type,class:"form-control", placeholder:NIS(placeHolder, Empty)});
    this.Input.classList.add(NIS(iInputSize));
    this.Input.value = NIS(defaultValue, Empty);
    this._CreateDescription(DescriptionHTML);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
/*Input Default*/
iInput.prototype.InputText = function (iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML) {
   return this._defInput('text', iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML);
};
iInput.prototype.InputDate = function (iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML) {
    return this._defInput('date', iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML);
};
iInput.prototype.InputEmail = function (iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML) {
    return this._defInput('email', iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML);
};
iInput.prototype.InputPassword = function (iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML) {
    return this._defInput('password', iInputSize, LabelHTML, defaultValue, placeHolder, DescriptionHTML);
};
/*TextArea*/
iInput.prototype.InputTextArea = function (rowsNumber, LabelHTML, defaultValue, placeHolder, DescriptionHTML) {
    this._type_value = iInput._type_value.HTML;
    this._CreateLabel(LabelHTML);
    this.Input = CreateElement('textarea',{rows:NIS(rowsNumber,'3'), class:"form-control", placeholder:NIS(placeHolder, Empty)});
    this.Input.innerHTML = NIS(defaultValue, Empty);
    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Label, this.Input, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
iInput.prototype.InputBigSize = function () {this.Input.AddClass('form-control-lg');};
iInput.prototype.InputSmallSize = function () {this.Input.AddClass('form-control-sm');};
iInput.prototype.InputDisable = function () {this.Input.setAttribute('disabled','');};
iInput.prototype.InputEnable = function () {this.Input.removeAttribute('disabled');};
iInput.prototype.InputReadonly = function () {this.Input.setAttribute('readonly','');};
iInput.prototype.InputEditible = function () {this.Input.removeAttribute('readonly');};
/*FILE*/
iInput.prototype.InputFile = function (BoolMultiple, iInputSize, LabelHTML, DescriptionHTML) {
    this._type_value = iInput._type_value.FILES;
    this._CreateLabel(LabelHTML);
    this.Input = CreateElement('input',{type:'file',class:"form-control",value:'selected'});
    this.Input.classList.add(NIS(iInputSize));
    if(istrue(BoolMultiple)){
        this.Input.setAttribute('multiple','');
    };
   this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Label, this.Input, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
/*COLOR*/
iInput.prototype.InputColor = function (defaultColor, iInputSize, LabelHTML, placeHolder, DescriptionHTML) {

    this._CreateLabel(LabelHTML);
    this.Input = CreateElement('input',{type:'color', class:"form-control form-control-color", placeholder:NIS(placeHolder, Empty)});
    this.Input.value = NIS(defaultColor, '#563d7c');
    this.Input.classList.add(NIS(iInputSize));
    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Label, this.Input, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
iInput.InputSelectOption = function(value,html){
    var option = CreateElement('option',{value:NIS(value)});
    option = EquateHTML(option,html);
    return option;
};
iInput._SetSelectedOption = function(ArrayO, SelectedValueOrOption){
    if(isset(SelectedValueOrOption)){
        for(var option in ArrayO){
            if(ArrayO[option].innerHTML==SelectedValueOrOption || ArrayO[option].value==SelectedValueOrOption){
                ArrayO[option].setAttribute('selected','');
            };
        };
    };
    return ArrayO;
};
/*SELECT*/
iInput.prototype.InputSelect = function (iInputArrayOfInputSelectOption, SelectedValueOrOption, iInputSize, LabelHTML, DescriptionHTML) {

    this._CreateLabel(LabelHTML);
    this.Input = CreateElement('select',{class:"form-select"});
    this.Input.classList.add(NIS(iInputSize));
    iInputArrayOfInputSelectOption = iInput._SetSelectedOption(iInputArrayOfInputSelectOption, SelectedValueOrOption);
    this.Input.appendChilds(iInputArrayOfInputSelectOption);

    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Label, this.Input, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
/*SWITCH*/
iInput.prototype.InputSwitch = function (DefaultValue,  LabelHTML, DescriptionHTML) {
    this._type_value = iInput._type_value.CHECKED;
    var id = Uniq_ID();
    this.Div.classList.add('form-check','form-switch');
    this.Input = CreateElement('input',{class:"form-check-input",type:'checkbox',role:'switch',id:id });
    if(istrue(DefaultValue)){
        this.Input.setAttribute('checked','');
    };
    this.Label = CreateElement('label',{class:'form-check-label',for:id });
    this.Label = EquateHTML(this.Label, LabelHTML);
    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Input, this.Label, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;

};
/*RADIO*/
iInput.prototype.InputRadio = function (DefaultValue, value,  LabelHTML, DescriptionHTML) {
    this._type_value = iInput._type_value.CHECKED;
    this.Div.classList.add('form-check');
    this.Input = CreateElement('input',{class:"form-check-input",type:'radio',value:NIS(value)});
    if(istrue(DefaultValue)){
        this.Input.setAttribute('checked','');
    };
    this.Label = CreateElement('label',{class:'form-check-label'});
    this.Label = EquateHTML(this.Label, LabelHTML);
    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Input, this.Label, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
/*CHECKBOX*/
iInput.prototype.InputCheck = function (DefaultValue,  LabelHTML, DescriptionHTML) {
    this._type_value = iInput._type_value.CHECKED;
    var id = Uniq_ID();
    this.Div.classList.add('form-check');
    this.Input = CreateElement('input',{class:"form-check-input",type:'checkbox',id:id});
    if(istrue(DefaultValue)){
        this.Input.setAttribute('checked','');
    };
    this.Label = CreateElement('label',{class:'form-check-label',for:id});
    this.Label = EquateHTML(this.Label, LabelHTML);
    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Input, this.Label, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};
/*RANGE*/
iInput.prototype.InputRange = function (Max,Min,Step,DefaultValue,LabelHTML, DescriptionHTML) {
    this.Div.classList.add('form-check');
    this.Input = CreateElement('input',{class:"form-range",type:'range',min:NIS(Min),max:NIS(Max),step:NIS(Step),value:NIS(DefaultValue)});
    this.Label = CreateElement('label',{class:'form-label'});
    this.Label = EquateHTML(this.Label, LabelHTML);
    this._CreateDescription(DescriptionHTML);

    //this.Div.appendChilds(this.Label, this.Input, this.Description);
    this.Group.appendChild(this.Input);
    this.Div.appendChilds(this.Label,this.Group,this.Description);
    return this.Div;
};

function iSearchResult(iInputThis, isComboSelect, Classes) {
    this.Input = iInputThis;
    this.SubMenu = null;
    this.isCached = false;
    this.Cached = {};
    this.Words = {
        root:[]
    };
    this._makeRelative();
    this._submenu(Classes);
    this.isCombo = istrue(isComboSelect);

};
iSearchResult.prototype._makeRelative = function () {
    this.Input.Div.AddClass('position-relative');
};
iSearchResult.prototype._submenu = function (Classes) {
    this.SubMenu = CreateElement('div',{class:'isearch-sub', style:'display:none;'});
    this.SubMenu.AddClass(Classes);
    this.Input.Div.appendChild(this.SubMenu);
};
iSearchResult.prototype._userItem = function(text){
    return text;
};
iSearchResult.prototype.SetTemplateItem = function(UserFuncHtmlArg){
    this._userItem = UserFuncHtmlArg;
};
iSearchResult.prototype._add_item = function(text){
    var This = this;
    var item = CreateElement('div',{class:'item'});
    item.setAttribute('value',text);
    item.EquateHTML(this._userItem(text));
    $(item).on( "click", function () {
        This.Input.Input.value = item.getAttribute('value');
        This.Input.CheckValidationMethod(false);
    } );
    this.SubMenu.appendChild(item);
};
iSearchResult.prototype._add_devide = function(html){
    var item = CreateElement('div',{class:'devide'});
    item.EquateHTML(html);
    this.SubMenu.appendChild(item);
};
iSearchResult.prototype._ClearItems = function(){
    this.SubMenu.innerHTML = '';
};
iSearchResult.prototype._ShowMenu = function(){
    $(this.SubMenu).show('blind');
};
iSearchResult.prototype._HideMenu = function(){
    $(this.SubMenu).hide('blind');
};
iSearchResult.prototype._SetEventsOnInput = function(){
    var This = this;
    this.Input.OnInput(function () {
        This._LocalSearch();
        This.Input.CheckValidationMethod(false);
    });
    $(this.Input.Input).focusout(function() {
        This._HideMenu();
    });
    $(this.Input.Input).focusin(function() {
        This._LocalSearch();
    });
};
/*Установить список со словами*/
iSearchResult.prototype.SetList = function (ArrayList) {
    if(Array.isArray(ArrayList)){
        this.Words.root = ArrayList;
    }else if(isObject(ArrayList)){
        for(var key in ArrayList){
            this.Words[key] = ArrayList[key];
        };
    }else{
        alert('ArrayList is not Array Or Object');
    };
    this._SetEventsOnInput();
};

iSearchResult.prototype._algSerch = function(v){
    var tmp_raz = [];
    for(var razdel in this.Words){

        for(var i=0; i<this.Words[razdel].length; i++){
            v = v.trim();
            if(this.Words[razdel][i].toLowerCase().indexOf(v.toLowerCase()) !== -1){
                if(razdel!='root' && !tmp_raz.includes(razdel)){
                    this._add_devide(razdel);
                    tmp_raz.push(razdel);
                };
                this._add_item(this.Words[razdel][i]);
            };
        };
    };
};
iSearchResult.prototype._LocalSearch = function(){
    this._ClearItems();
    var v =  this.Input.GetInputValue();
    v = v.trim();

    if(v!='' || this.isCombo){
        this._ShowMenu();
        this._algSerch(v);
    };

};

/* Установить список удаленный */
iSearchResult.prototype.SetRemoteList = function (GET_RULE) {

};


/*#################################################################*/
// Grid DIV
/*#################################################################*/
function iGrid() {
    this.Container = null;
    this.Rows = [];
    this.Cols = {};
    this.IncrementRow = -1;
    this.RowsCount = 0;
};
iGrid.Screen = {
    DEFAULT:'',
    SMALL:'sm',
    MEDIUM:'md',
    LARGE:'lg',
    EXTRA_LARGE:'xl',
    EXTRA_EXTRA_LARGE:'xxl',
    FULL_SIZE:'fluid'
};
iGrid.Size = {DEFAULT:'',S_1:'1',S_2:'2',S_3:'3',S_4:'4',S_5:'5',S_6:'6',S_7:'7',S_8:'8',S_9:'9',S_10:'10',S_11:'11',S_12:'12'};
iGrid.AlignItems = {
    DEFAULT:'',
    TOP:'align-items-start',
    CENTER:'align-items-center',
    BOTTOM:'align-items-end'
};
iGrid.AlignSelf = {
    DEFAULT:'',
    TOP:'align-self-start',
    CENTER:'align-self-center',
    BOTTOM:'align-self-end'
};
iGrid.JustifyContent = {
    START:'justify-content-start',
    CENTER:'justify-content-center',
    END:'justify-content-end',
    AROUND:'justify-content-around',
    BETWEEN:'justify-content-between',
    EVENLY:'justify-content-evenly'
};
iGrid.prototype.GetContainer = function () {
    return this.Container;
};
iGrid.prototype._Col = function (iGridSize, iGridScreen, iGridAlignSelf, Classes) {
    var size = '';
    if(!empty(iGridSize)){
        if(!empty(iGridScreen)){
            size='-'+iGridScreen+'-'+iGridSize;
        }else{
            size='-'+iGridSize;
        };
    };
    var col = CreateElement('div',{class:'col'+size});
    col.AddClass(iGridAlignSelf, Classes);
    col.id = Uniq_ID();
    return col;
};
iGrid.prototype._Row = function (Class, iGridAlignItems, iGridJustifyContent) {
    var row = CreateElement('div',{class:'row'});
    row.AddClass(Class, iGridAlignItems, iGridJustifyContent);
    row.id = Uniq_ID();
    return row;
};
iGrid.prototype._Container = function (preSize, Class) {
    if(isset(preSize)){
        preSize='-'+preSize;
    }else{preSize='';};

   var Container = CreateElement('div',{class:'container'+preSize});
   Container.AddClass(Class);
   Container.id = Uniq_ID();
   return Container;
};
iGrid.prototype.CreateRow = function(ClassArray){
    return this._Row(ClassArray);
};
iGrid.prototype.CreateCol = function(html, iGridSize, iGridScreen, iGridAlignSelf, Classes){
    var col = this._Col(iGridSize, iGridScreen, iGridAlignSelf, Classes);
    col = EquateHTML(col, html);
    return col;
};

/*Построить контейнер*/
iGrid.prototype.BuildContainer = function (iGridSize, ClassArray) {
    this.Container = this._Container(iGridSize, ClassArray);
    return this.Container;
};
/*Построить строку*/
iGrid.prototype.BuildRow = function (iGridAlignItems, iGridJustifyContent, Class) {
    this.Rows.push(this._Row(Class, iGridAlignItems, iGridJustifyContent));
    this.RowsCount = this.Rows.length;

    this.IncrementRow = this.RowsCount-1;

    this.Container.appendChild(this.Rows[this.IncrementRow]);
    return this.Rows[this.IncrementRow];
};
/*Построить ячейку к построенной строке*/
iGrid.prototype.BuildCol = function (html, iGridSize, iGridScreen, iGridAlignSelf, Classes) {

    if(this.IncrementRow==-1){logout('Перед BuildRow после BuildCol');return CreateElement('div',{});}
    var col = this.CreateCol(html, iGridSize, iGridScreen, iGridAlignSelf, Classes);
    if(!this.Cols.hasOwnProperty(this.IncrementRow)){
        this.Cols[this.IncrementRow] = [];
    };
    this.Cols[this.IncrementRow].push(col);

    this.Rows[this.IncrementRow].appendChild(col);
    return col;
};
iGrid.prototype.ClearContainer = function(){
    this.Container.innerHTML = '';
    this.Rows = [];
    this.Cols = {};
    this.IncrementRow = -1;
    this.RowsCount = 0;
};
iGrid.prototype.Remove = function (){
    RemoveElement(this.Container);
    delete this;
};
/*
g.BuildContainer('vasa');

    g.BuildRow('vasa');

    g.BuildCol('col1');
    g.BuildCol('col1');
    g.BuildCol('col1');

    g.BuildRow('vasa');

    g.BuildCol('col2');
    g.BuildCol('col2');
    g.BuildCol('col2');

* */
/*#################################################################*/
// Table <TABLE>
/*#################################################################*/
function iTable(iTableBorder,iTableSize,iTableColor,iTableStriped,iTableHover){
    this.All = CreateElement('div',{class:'table-responsive'});
    this.Table = CreateElement('table',{class:'table'});
    this.Table.AddClass(iTableBorder);
    this.Table.AddClass(iTableSize);
    this.Table.AddClass(iTableColor);
    this.Table.AddClass(iTableStriped);
    this.Table.AddClass(iTableHover);

    this.Header = null;
    this.Body = null;
    this.Foot = null;
    this.Caption = null;
    this.HeadCounts = 0;
    this.HeadRows = [];
    this.BodyCounts = 0;
    this.BodyRows = [];
    this.FootCounts = 0;
    this.FootRows = [];
}
iTable.prototype.GetAll = function(){return this.All;};
iTable.prototype.GetTable = function(){return this.Table;};
iTable.prototype.GetHeader = function(){return this.Header;};
iTable.prototype.GetBody = function(){return this.Body;};
iTable.prototype.GetFoot = function(){return this.Foot;};
iTable.prototype.GetCaption = function(){return this.Caption;};
iTable.Border = {HAVE_BORDER:'table-bordered', NO_BORDER:'table-borderless'};
iTable.Size = {SMALL:'table-sm', DEFAULT:''};
iTable.CaptionPosition = {TOP:'caption-top',BOTTOM:'caption-bottom'};
iTable.Color = {LIGHT:'table-light', DARK:'table-dark', INFO:'table-info', WARNING:'table-warning',DANGER:'table-danger',SUCCESS:'table-success',SECOND:'table-secondary',PRIMARY:'table-primary', DEFAULT:''};
iTable.Striped ={STRIP:'table-striped',DEFAULT:''};
iTable.Hover={HOVERED:'table-hover', DEFAULT:'', ACTIVE:'table-active'};
iTable.prototype._Caption = function (Classes){
    var caption = CreateElement('caption',{});
    caption.AddClass(Classes);
    return caption;
};
iTable.prototype._Header = function (Classes) {
   var thead = CreateElement('thead',{});
   thead.AddClass(Classes);
   return thead;
}
iTable.prototype._Body = function (Classes) {
    var tbody = CreateElement('tbody',{});
    tbody.AddClass(Classes);
    return tbody;
};
iTable.prototype._Foot = function (Classes) {
    var tfoot = CreateElement('tfoot',{});
    tfoot.AddClass(Classes);
    return tfoot;
};
iTable.prototype._Row = function (Classes) {
    var tr = CreateElement('tr',{});
    tr.AddClass(Classes);
    return tr;
};
iTable.prototype._Col = function (html, isHeaderCol, Classes) {
    var col=null;
    if(istrue(isHeaderCol)){
        col = CreateElement('th',{scope:'col'});
    }else{
        col = CreateElement('td',{});
    };
    col.AddClass(Classes);
    col.EquateHTML(html);
    return col;
};

iTable.prototype.CreateTable = function(HeaderClasses,BodyClasses,FootClasses,CaptionClasses){
    this.Header = this._Header(HeaderClasses);
    this.Body = this._Body(BodyClasses);
    this.Foot = this._Foot(FootClasses);
    this.Caption = this._Caption(CaptionClasses);
    this.Table.appendChilds(this.Caption, this.Header, this.Body, this.Foot);
    this.All.appendChild(this.Table);
    return this.All;
};
iTable.prototype.AddHeadRow = function (Classes) {
    this.HeadRows.push(this._Row(Classes));
    this.HeadCounts = this.HeadRows.length;
    this.Header.appendChild(this.HeadRows[this.HeadCounts-1]);
};
iTable.prototype.AddHeadCol = function (html, isHead, Classes){
    this.HeadRows[this.HeadCounts-1].appendChild(this._Col(html, isHead, Classes));
};
iTable.prototype.ClearHead = function(){
    this.HeadRows = [];this.HeadCounts=0;this.Header.innerHTML = '';
};
iTable.prototype.AddBodyRow = function (Classes){
    this.BodyRows.push(this._Row(Classes));
    this.BodyCounts = this.BodyRows.length;
    this.Body.appendChild(this.BodyRows[this.BodyCounts-1]);
};
iTable.prototype.AddBodyCol = function (html, isHead, Classes){
    this.BodyRows[this.BodyCounts-1].appendChild(this._Col(html, isHead, Classes));
};
iTable.prototype.ClearBody = function(){
    this.BodyRows = [];this.BodyCounts=0;this.Body.innerHTML = '';
};
iTable.prototype.AddFootRow = function (Classes){
    this.FootRows.push(this._Row(Classes));
    this.FootCounts = this.FootRows.length;
    this.Foot.appendChild(this.FootRows[this.FootCounts-1]);
};
iTable.prototype.AddFootCol = function (html, isHead, Classes){
    this.FootRows[this.FootCounts-1].appendChild(this._Col(html, isHead, Classes));
};
iTable.prototype.ClearFoot = function(){
    this.FootRows = [];this.FootCounts=0;this.Foot.innerHTML = '';
};
iTable.prototype.Remove = function(){
    RemoveElement(this.All);
    delete this;
};

/*#################################################################*/
// Images
/*#################################################################*/

function iImage() {
    this.Image = null;
};
iImage.prototype.Get = function(){
    return this.Image;
};
iImage.Type = {
    FLUID:'img-fluid',
    THUMBNAIL:'img-thumbnail'
};
iImage.prototype.RoundedToggle = function(){
    this.Image = ToggleClass(this.Image,['rounded']);
};
iImage.prototype.FloatStartToggle = function(){
    this.Image = ToggleClass(this.Image,['float-start']);
};
iImage.prototype.FloatEnd = function(){
    this.Image = ToggleClass(this.Image,['float-end']);
};
iImage.prototype.SetType = function(iTYpe){
    if(isset(iTYpe)){
        this.Image.classList.add(NIS(iTYpe, iImage.Type.FLUID));
    };
};
iImage.prototype.SetAlt = function(Alt){
    if(isset(Alt)){
        this.Image.setAttribute('alt',Alt);
    };
};
iImage.prototype.SetSrc = function(Src){
    if(isset(Src)){
        this.Image.setAttribute('src',Src);
    };
};
iImage.prototype.ImageCreate  = function(iImageiType, Src, Alt){
    //<img src="..." class="img-fluid" alt="...">
    this.Image = CreateElement('img',{});
    this.SetType(iImageiType);
    this.SetSrc(Src);
    this.SetAlt(Alt);
};

/*iMedia.VideoRatio = {
    '1x1':'1x1',
    '4x3':'4x3',
    '16x9':'16x9',
    '21x9':'21x9',
};*/

/*#################################################################*/
// Collapse
/*#################################################################*/
function iCollapse() {
    this.Collapse = null;
    this.bsCollapse = null;
};
iCollapse.prototype.Get = function(){
    return this.Collapse;
};
iCollapse.prototype.CreateCollapseContainer = function (html,isShow) {
    this.Collapse = CreateElement('div',{class:'collapse'});
    if(istrue(isShow)){
        this.Collapse.classList.add('show');
    }
    this.Collapse = EquateHTML(this.Collapse, html);
    this.bsCollapse = new bootstrap.Collapse(this.Collapse, {
        toggle: false
    });
    return this.Collapse;
};
iCollapse.prototype.SetHtml = function(html){this.Collapse = EquateHTML(this.Collapse, html);};
iCollapse.prototype.Hide = function () {this.bsCollapse.hide();};
iCollapse.prototype.Show = function () {this.bsCollapse.show();};
iCollapse.prototype.Toggle = function () {this.bsCollapse.toggle();};
iCollapse.prototype.Clear = function () {this.Collapse.innerHTML='';};
iCollapse.prototype.Remove = function () {delete this.bsCollapse; RemoveElement(this.Collapse); delete this.Collapse;};



/*#################################################################*/
// Alerts
/*#################################################################*/
function iAlert() {
    this.Alert = null;
};
iAlert.Type = {
    PRIMARY: 'alert-primary',
    SECOND:'alert-secondary',
    SUCCESS:'alert-success',
    DANGER:'alert-danger',
    WARNING:'alert-warning',
    INFO:'alert-info',
    LIGHT:'alert-light',
    DARK:'alert-dark'
};
iAlert.prototype.Get = function(){
    return this.Alert;
};
iAlert.prototype.SetHtml = function(html){
    this.Alert = EquateHTML(this.Alert, html);
};
iAlert.prototype.Show = function(){
    this.Alert.RemoveClass('d-none');
};
iAlert.prototype.Hide = function(){
    this.Alert.AddClass('d-none');
};
iAlert.prototype.Close = function(){
   RemoveElement(this.Alert);
   delete this.Alert;
};
iAlert.prototype.CreateAlertContainer = function (iAlertType, html, isHidden, isCanClose, iIconAlert) {
    this.Alert = CreateElement('div',{class:'alert alert-dismissible fade show d-flex align-items-center'});
    this.Alert.classList.add(NIS(iAlertType, iAlert.Type.SUCCESS));
    this.Alert = EquateHTML(this.Alert, html);
    if(istrue(isHidden)){
        this.Alert.classList.add('d-none');
    };
    if(istrue(isCanClose)){
        var closeButton = new iButton('', iButton.Tag.BUTTON, iButton.Type.CLOSE);
        closeButton.MakeDismiss('alert');
        this.Alert.appendChild(closeButton.Get());
    };
    if(isset(iIconAlert)){
        this.Alert.prependChilds(iIconAlert);
    };
};

/*#################################################################*/
// Badges && Counter Messages
/*#################################################################*/
function iBadge() {
    this.Badge = null;
};
iBadge.prototype.SetHtml = function(html){
    this.Badge = EquateHTML(this.Badge, html);
};
iBadge.prototype.Remove = function(){
    RemoveElement(this.Badge);
    delete this;
};
iBadge.prototype.Get = function(){
    return this.Badge;
};
iBadge.prototype.MakeRightTop = function(){
    this.Badge.AddClass('position-absolute','top-0','start-100','translate-middle');
};
iBadge.prototype.MakePill = function(){
    this.Badge.AddClass('rounded-pill');
};
iBadge.prototype.CreateBadgeContainer = function (html, iColorBackground, iColorText) {
    this.Badge = CreateElement('span',{class:'badge'});
    this.Badge = EquateHTML(this.Badge, html);
    this.Badge.AddClass(NIS(iColorBackground, iColor.Background.PRIMARY_BACKGROUND));
    this.Badge.AddClass(NIS(iColorText, iColor.Text.WHITE_TEXT));
    return this.Badge;
};
//position-absolute top-0 start-100 translate-middle

/*#################################################################*/
// Accordion
/*#################################################################*/
function iAccordion(isOnlyOneOpened) {
    this.Accordion = null;
    this.GlobalId = null;
    this.OnlyOneOpened = false;
    this._CreateAccordionContainer();
    if(istrue(isOnlyOneOpened)){
        this.OnlyOneOpened = true;
    };
    this.BodyContent = [];
};
iAccordion.prototype.Get = function(){
    return this.Accordion;
};
iAccordion.prototype.GetBodyContentArray = function(){
    return this.BodyContent;
};
iAccordion.prototype._CreateAccordionContainer = function () {
    this.GlobalId = Uniq_ID();
    this.Accordion = CreateElement('div',{class:'accordion', id:this.GlobalId});
    return this.Accordion;
};
iAccordion.prototype.MakeNoSpaceInItems = function(){
    $(this.Accordion).find('.accordion-body').each(function() {
        //test
        $(this)[0].ToggleClass('accordion-body-nospace');
    });
};
iAccordion.prototype.AddItem = function (buttonHTML, contentHTML, isOpened, const_SIZE) {
        var show = ''; //collapse
        var aria_expanded = 'false'; //button
        var collapsed = ' collapsed'; //button class
        if(istrue(isOpened)){
            collapsed = '';
            aria_expanded = 'true';
            show = ' show';
        };
    var item_id = Uniq_ID();
    var item = CreateElement('div',{class:'accordion-item'});
    var header = CreateElement('div',{class:'accordion-header'});
        var button = CreateElement('button',{
            class:'accordion-button'+collapsed,
            'type':"button",
            'data-bs-toggle':"collapse",
            'data-bs-target':"#"+item_id,
            'aria-expanded':aria_expanded,
            'aria-controls':""
        });
        button = EquateHTML(button, buttonHTML);

        if(isset(const_SIZE)){
            if(const_SIZE===SIZE.SMALL){
                button.AddClass('accordion-button-sm');
            };
        };


    var collapse = CreateElement('div',{class:'accordion-collapse collapse'+show, id:item_id,'aria-labelledby':""});
        var body = CreateElement('div',{class:'accordion-body'});
        body.appendChilds(contentHTML);
        //body = EquateHTML(body, contentHTML);
        this.BodyContent.push(body);
    if(this.OnlyOneOpened){
        collapse.setAttribute('data-bs-parent', '#'+this.GlobalId);
    };
    collapse.appendChild(body);
    header.appendChild(button);
    item.appendChilds(header, collapse);
    this.Accordion.appendChild(item);
    return item;

};



/*#################################################################*/
// Toast's
/*#################################################################*/
function iToast() {
    this.Container = null;
    this.MaxToasts = null;
    this._Counter = 0;
};
iToast.prototype.GetContainer = function(){
    return this.Container;
};
iToast.prototype.CreateContainer = function (iPositionPosition, iPositionStaticPlace, maxToasts) {
    if(isset(maxToasts)){
        this.MaxToasts = maxToasts;
    };
    iPositionPosition = NIS(iPositionPosition, iPosition.Position.DEFAULT);
    iPositionStaticPlace = NIS(iPositionStaticPlace, iPosition.StaticPlace.DEFAULT);
    this.Container = CreateElement('div',{class:'p-3'});
    this.Container.AddClass(iPositionPosition);
    this.Container.AddClass(iPositionStaticPlace);
    return this.Container;
};
iToast.prototype.Header = function(titleHTML,smallHTML){
    var strong = CreateElement('strong',{class:'me-auto'});
    strong = EquateHTML(strong, titleHTML);
    var small = CreateElement('small',{});
    small = EquateHTML(small, smallHTML);
    var closeButton = new iButton('', iButton.Tag.BUTTON, iButton.Type.CLOSE);
    closeButton.Get().onclick = function(){
        this._Counter--;
    };
    closeButton.MakeDismiss('toast');
    return [strong,small,closeButton.Get()];
};
iToast.prototype.AddToast = function (iToastHeaderOrHtml, bodyHtml, iIconAlert) {
    var toast = CreateElement('div',{class:'toast fade show',role:'alert','aria-live':"assertive",'aria-atomic':"true"});
        var header = CreateElement('div',{class:'toast-header'});
        var body = CreateElement('div',{class:'toast-body'});
        header = EquateHTML(header, iToastHeaderOrHtml);
        if(isset(iIconAlert)){
            header.prependChilds(iIconAlert);
        };

        body = EquateHTML(body, bodyHtml);
    toast.appendChilds(header, body);

    if(this.MaxToasts!=null){
        if(this._Counter>=this.MaxToasts){
            $(this.Container).find('div:first').remove();
            this._Counter--;
        };
    };
    //$(toast).appendTo(this.Container).hide().show('slow');
    //$(this.Container).append(toast).hide().show('slow');
    this.Container.appendChilds(toast);
    this._Counter++;

    return toast;
};
iToast.prototype.Remove = function () {
    RemoveElement(this.Container);
    this.Container = null;
    delete this;
};
iToast.prototype.ClearContainer = function () {
    this.Container.innerHTML = '';
};


/*#################################################################*/
// Popover
/*#################################################################*/
function iPopover(TargetElement,_options,_alreadyInit){
    this.TargetElement = TargetElement;
    this.RndID = time().toString()+random(100,1000).toString();
    this.NotTerminatorClass = 'not-terminator'+this.RndID;
    this.Options = {
        html:true,
        animation:true,
        content:'',
        placement:'',
        title:'',
        trigger:iPopover.Trigger.HOVER
    };
    if(isset(_options)){
        this.Options = _options;
    };
    if(istrue(_alreadyInit)){
        this.Init();
    };
    this.AbstractTrigger = '';
    this.EventShowAlready = false;
    this.Active = false;
    this.EventsOnShow = [];
    this.EventsOnClose = [];
};
iPopover.Place = {
    AUTO:'auto', RIGHT:'right', LEFT:'left', TOP:'top', BOTTOM:'bottom'
};
iPopover.Trigger = {
    CLICK:'click', HOVER:'hover', FOCUS:'focus', MANUAL:'manual', CLOSE_ON_CLICK_ANOTHER:'coca'
};
iPopover.prototype.SetPlace = function (iPopoverPlace) {
    this.Options.placement = iPopoverPlace;
};
iPopover.prototype.SetTitle = function (html) {
    this.Options.title = html;
};
iPopover.prototype.SetContent = function (html) {
    this.Options.content = html;
};
iPopover.prototype.SetTirggers = function(string){
    if(string==iPopover.Trigger.CLOSE_ON_CLICK_ANOTHER){
        this.AbstractTrigger = iPopover.Trigger.CLOSE_ON_CLICK_ANOTHER;
        this.Options.trigger = iPopover.Trigger.MANUAL;
    }else{
        this.Options.trigger = string;
    };

};
iPopover.prototype.SetOption = function(key,value){this.Options[key] = value;};
iPopover.prototype.SetOptions = function(Obj){this.Options = Obj;};
iPopover.prototype.AddEventOnShow = function(UserFunc){
    this.EventsOnShow.push(UserFunc);
};
iPopover.prototype.AddEventOnClose = function(UserFunc){
    this.EventsOnClose.push(UserFunc);
};
iPopover.prototype.Init = function() {
    //$().popover(this.Options);
    var popover = new bootstrap.Popover(this.TargetElement, this.Options);
    //new bootstrap.Popover(exampleEl, options)
    var This = this;

        $(this.TargetElement).on('shown.bs.popover', function () {
            This.Active = true;

            if(!This.EventShowAlready && This.AbstractTrigger==iPopover.Trigger.CLOSE_ON_CLICK_ANOTHER){

                var popover = $(this).data('bs.popover').tip;
                popover.classList.add(This.NotTerminatorClass);
                This.TargetElement.classList.add(This.NotTerminatorClass);

                addEvent(window, 'click', function (e) {

                    if(This.Active==true && This.AbstractTrigger==iPopover.Trigger.CLOSE_ON_CLICK_ANOTHER){
                        /*if(!$(e.target).parents().hasClass('not-terminator')){
                            This.Toggle();
                        };*/
                        if($(e.target).closest('.'+This.NotTerminatorClass).length<1){
                            This.Toggle();
                        };
                    };

                });
                This.EventShowAlready = true;
            };

            for(var i=0; i<This.EventsOnShow.length;i++){
                This.EventsOnShow[i]();
            };


        });

        $(this.TargetElement).on('hidden.bs.popover',function(){
            This.Active = false;
            for(var i=0; i<This.EventsOnClose.length;i++){
                This.EventsOnClose[i]();
            };
        });


};

iPopover.prototype.Toggle = function() {
    $(this.TargetElement).popover('toggle');
};
iPopover.prototype.Show = function() {
    $(this.TargetElement).popover('show');

};
iPopover.prototype.Hide = function() {
    $(this.TargetElement).popover('hide');
};
iPopover.prototype.Update = function() {
    $(this.TargetElement).popover('update');
};
/*
/*#################################################################*/
// Modals
/*#################################################################*/
function iModal(iModalSizeDialog) {
    this.Modal = null;
    this.myModal = null;
    this.UserTitle = null;
    this.UserBody = null;
    this.UserFooter = null;
    this.iModalSizeDialog = NIS(iModalSizeDialog, iModal.SizeDialog.DEFAULT);

    this.EventCancel = function () {return false;};
    this.EventOk = function () {return false;};

    this.Fillit = false;
};
iModal.SizeDialog = {
    SMALL:'modal-sm',
    DEFAULT:Empty,
    LARGE:'modal-lg',
    EXTRA_LARGE:'modal-xl',
    FULL_SCREEN:'modal-fullscreen'
};
iModal.prototype.SetSizeDialog = function(iModal_SizeDialog){
    if(isset(iModal_SizeDialog)){
        this.iModalSizeDialog = iModal_SizeDialog;
    };
};
iModal.prototype.SetTitle = function(title){
    this.UserTitle = title;
};
iModal.prototype.SetBody = function(body){
    this.UserBody = body;
};
iModal.prototype.SetFooter = function(footer){
    this.UserFooter = footer;
};
iModal.prototype.SetEventOk = function(UserFunc){
    this.EventOk = UserFunc;
};
iModal.prototype.SetEventCancel = function(UserFunc){
    this.EventCancel = UserFunc;
};
iModal.prototype.DefaultEventOk = function(){
    return this.EventOk();
};
iModal.prototype.DefaultEventCancel = function(){
    return this.EventCancel();
};
iModal.Container = '#modalscontainer';



iModal.prototype._ModalAll= function () {
    return CreateElement('div',{class:'modal fade', "tabindex":"-1","aria-hidden":"true"});
};
iModal.prototype._ModalDialog = function () {
    var dialog = CreateElement('div',{class:'modal-dialog modal-dialog-centered modal-dialog-scrollable'});
    dialog.AddClass(this.iModalSizeDialog);
    return dialog;
};
iModal.prototype._ModalContent = function () {
    return CreateElement('div',{class:'modal-content'});
};
iModal.prototype._ModalHeader = function () {
    return CreateElement('div',{class:'modal-header'});
};
iModal.prototype._DefaultHeader = function (title){
    title = NIS(title,"РћРєРЅРѕ");
    return [
        CreateElement('h5',{class:'modal-title',innerHTML:title}),
        CreateElement('button',{innerHTML:'', class:"btn-close", 'data-bs-dismiss':"modal","aria-label":"Close"})
    ];
};
iModal.prototype._ModalBody = function () {
    return CreateElement('div',{class:'modal-body'});
};
iModal.prototype._DefaultBody = function (body){
    body = NIS(body,"...");
    return [
        CreateElement('p',{class:'',innerHTML:body}),
    ];
};
iModal.prototype._ModalFooter = function () {
    return CreateElement('div',{class:'modal-footer'});
};

iModal.prototype._DefaultFooter = function (footer){
    var This = this;
    footer = NIS(footer, "OK");
    return [
        CreateElement('button',{innerHTML:'Default Foot', class:"btn btn-secondary", 'data-bs-dismiss':"modal", onclick:function(){return This.DefaultEventCancel();}}),
        CreateElement('button',{innerHTML:footer, class:"btn btn-primary", onclick:function(){return This.DefaultEventOk();}}),
    ];

};

iModal.prototype.FillElements = function (headerArrayElements, bodyArrayElements, footerArrayElements) {
    headerArrayElements = this.UserTitle;
    bodyArrayElements = this.UserBody;
    footerArrayElements = this.UserFooter;
    var all = this._ModalAll();
    var dialog = this._ModalDialog();
    var content = this._ModalContent();
    var header = this._ModalHeader();
    if(isset(headerArrayElements) && (Array.isArray(headerArrayElements) || isDom(headerArrayElements))){
        header.appendChilds(headerArrayElements);
    }else{
        header.appendChilds(this._DefaultHeader(headerArrayElements));
    };
    var body = this._ModalBody();
    if(isset(bodyArrayElements) && (Array.isArray(bodyArrayElements) || isDom(bodyArrayElements))){
        body.appendChilds(bodyArrayElements);
    }else{
        body.appendChilds(this._DefaultBody(bodyArrayElements));
    };
    var footer = this._ModalFooter();
    if(isset(footerArrayElements) && Array.isArray((footerArrayElements) || isDom(footerArrayElements))){
        footer.appendChilds(footerArrayElements);
    }else{
        footer.appendChilds(this._DefaultFooter(footerArrayElements));
    };

    content.appendChilds(header,body,footer);
    dialog.appendChild(content);
    all.appendChild(dialog);
    this.Modal = all;
    return this.Modal;
};
iModal.prototype.Fill = function () {

    this.FillElements();

    this.myModal = new bootstrap.Modal(this.Modal, {
        keyboard: false
    });
    this.Fillit = true;
};
iModal.prototype.Show = function () {
    if(!this.Fillit){
        this.Fill();
    };
    this.myModal.show(this.Modal);
};
iModal.prototype.Hide = function () {
    this.myModal.hide();
};
iModal.prototype.Remove = function () {
    this.myModal.hide();
    delete this.myModal;
    delete this.Modal;
    delete this;
};

/*
/*#################################################################*/
// Carousel
/*#################################################################*/
function iCarousel(iCarouselInterval, iCarouselControl, iCarouselAnimate, iCarouselIndicators) {
    this.Carousel = null;
    this.Inner = null;
    this.Indicators = null;
    this.Id = null;
    this.isIndicators = iCarousel.Indicators.OFF;
    this.param={
        _first_indicator:true,
        _scroll_indicator:0,
        _first_item:true
    };
    this._init_Carousel(iCarouselInterval, iCarouselControl, iCarouselAnimate, iCarouselIndicators);
};
iCarousel.prototype.Get = function(){
    return this.Carousel;
};
iCarousel.prototype.GetHTML = function(){
    return this.Carousel.outerHTML;
};
iCarousel.Interval = {ON:'true', OFF:'false'};
iCarousel.Control = {ON:'true', OFF:'false'};
iCarousel.Indicators = {ON:'true', OFF:'false'};
iCarousel.Animate = {SLIDE:'', FADE:'carousel-fade'};
iCarousel.prototype._init_Carousel = function (iCarouselInterval, iCarouselControl, iCarouselAnimate, iCarouselIndicators) {
    this.Id = Uniq_ID();
    this.isIndicators = NIS(iCarouselIndicators, iCarousel.Indicators.OFF);
    //'data-bs-interval':NIS(iCarouselInterval,iCarousel.Interval.ON)
    if(iCarouselInterval==iCarousel.Interval.ON){
        this.Carousel = CreateElement('div',{id:this.Id, class:'carousel slide','data-bs-ride':"carousel"});
    }else{
        this.Carousel = CreateElement('div',{id:this.Id, class:'carousel slide','data-bs-interval':iCarousel.Interval.OFF});
    }

    this.Carousel.AddClass(iCarouselAnimate);
    this.Indicators = CreateElement('div',{class:'carousel-indicators'});
    this.Inner = CreateElement('div', {class:'carousel-inner'});

    this.Carousel.appendChilds(this.Indicators,  this.Inner);

    if(iCarouselControl===iCarousel.Control.ON){

        var prev = CreateElement('button',{'data-bs-slide':"prev", innerHTML:'<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
                '    <span class="visually-hidden">Previous</span>', class:'carousel-control-prev',type:'button','data-bs-target':'#'+this.Id});
        var next = CreateElement('button',{'data-bs-slide':"next", innerHTML:'<span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
                '    <span class="visually-hidden">Next</span>', class:'carousel-control-next',type:'button','data-bs-target':'#'+this.Id});
        this.Carousel.appendChilds(prev,next);
    };

};
iCarousel.prototype._add_indicator = function () {
    if(this.isIndicators===iCarousel.Indicators.ON){
        var ind = null;
        if(this.param._first_indicator===true){
            ind = CreateElement('button',{type:'button','data-bs-target':'#'+this.Id,'data-bs-slide-to':this.param._scroll_indicator, class:'active', 'aria-current':"true"});
            this.param._first_indicator = false;

        }else{
            ind = CreateElement('button',{type:'button','data-bs-target':'#'+this.Id,'data-bs-slide-to':this.param._scroll_indicator});
        };
        this.param._scroll_indicator++;
        this.Indicators.appendChild(ind);
    };
};
iCarousel.Caption = function(title,content){
    var cap = CreateElement('div',{class:'carousel-caption d-none d-md-block'});
    var t = CreateElement('h5',{});
    t.EquateHTML(title);
    var c = CreateElement('p',{});
    c.EquateHTML(content);
    cap.appendChilds(t,c);
    return cap;
};
iCarousel.prototype._add_item = function (src_img, iCarouselCaption) {
    var item = null;
    if(this.param._first_item===true){
        item = CreateElement('div',{class:'carousel-item active'});
        this.param._first_item=false;
    }else{
        item = CreateElement('div',{class:'carousel-item'});
    };

    var img = CreateElement('img',{src:src_img, class:'d-block w-100',alt:'...'});
    item.appendChild(img);
    item.EquateHTML(iCarouselCaption);
    this.Inner.appendChild(item);
};
iCarousel.prototype.AddItem = function (src_img, iCarouselCaption) {
    this._add_item(src_img, iCarouselCaption);
    this._add_indicator();
};
/*
/*#################################################################*/
// List
/*#################################################################*/
function iListItem(item) {
    this.Item = item;
    this.Items = [];
};
iListItem.prototype.Get = function () {
    return this.Item;
};
iListItem.prototype.Add = function(iListItemType, iListItemStyle, html, isActive, Classes, href, UserClick){
    var item = iList._Item(iListItemType, iListItemStyle, html, isActive, Classes, href, UserClick);
    var list_item = new iListItem(item);
    this.Items.push(list_item);
    this.Item.appendChild(list_item.Get());
    return list_item;
};
iListItem.prototype.GetItem = function(){return this.Item;};
iListItem.prototype.RemoveItem = function(){RemoveElement(this.Item);};
iListItem.prototype.DisableItem = function(){this.Item.AddClass('disabled');};
iListItem.prototype.EnableItem = function(){this.Item.RemoveClass('disabled');};
iListItem.prototype.ActiveItem = function(){this.Item.AddClass('active');};
iListItem.prototype.DeactivateItem = function(){this.Item.RemoveClass('disabled');};
function iList(isFlush, isNumbered, isHorizontal) {
    this.Ul = null;
    this.Items = [];
    this._init(isFlush, isNumbered, isHorizontal);
};
iList.prototype.Get = function(){return this.Ul;};
iList.prototype.GetItem = function(n){return this.Items[n];};
iList.prototype.RemoveItem = function(n){RemoveElement(this.Items[n]);};
iList.prototype.DisableItem = function(n){
    this.Items[n].Get().AddClass('disabled');
};
iList.prototype.EnableItem = function(n){
    this.Items[n].Get().RemoveClass('disabled');
};
iList.prototype.ActiveItem = function(n){
    this.Items[n].Get().AddClass('active');
};
iList.prototype.DeactivateItem = function(n){
    this.Items[n].Get().RemoveClass('disabled');
};
iList.ItemType ={LI:'li', LINK:'a'};
iList.ItemStyle = {
    DEFAULT:'',
    PRIMARY:'list-group-item-primary',
    SECONDARY:'list-group-item-secondary',
    SUCCESS:'list-group-item-success',
    DANGER:'list-group-item-danger',
    WARNING:'list-group-item-warning',
    INFO:'list-group-item-info',
    LIGHT:'list-group-item-light',
    DARK:'list-group-item-dark'
};
iList.prototype._init = function (isFlush, isNumbered, isHorizontal, _ScreenRESPONSE) {
    this.Ul = CreateElement('ul',{class:'list-group'});
    if(istrue(isFlush)){
        this.Ul.AddClass('list-group-flush');
    };
    if(istrue(isNumbered)){
        this.Ul.AddClass('list-group-numbered');
    };
    if(istrue(isHorizontal)){
        this.Ul.AddClass('list-group-horizontal'+NIS(_ScreenRESPONSE,''));
    };

};
iList._Item = function(iListItemType, iListItemStyle, html, isActive, Classes, href, UserClick){
    var item = CreateElement(iListItemType, {class:'list-group-item list-group-item-action'});
    if(istrue(isActive)){
        item.AddClass('active');
    };
    item.AddClass(iListItemStyle);
    item.AddClass(Classes);
    if(iListItemType==iList.ItemType.LINK){
        if(empty(href)){
            item.href = 'javascript:void(0)';
        };
    };
    if(!empty(UserClick)) {
        item.onclick = function () {
            UserClick();
        };
    };
    item.EquateHTML(html);
    return item;
}
iList.prototype._add_item = function (iListItemType, iListItemStyle, html, isActive, Classes, href, UserClick) {
    var item = iList._Item(iListItemType, iListItemStyle, html, isActive, Classes, href, UserClick);

    var list_item = new iListItem(item);

    this.Ul.appendChild(list_item.Get());
    this.Items.push(list_item);

    return list_item;
};
/*
@Returns iListItem
*/
iList.prototype.AddItem = function (iListItemType, iListItemStyle, html, isActive, hrefOrUserAction, Classes) {
    var list_item = this._add_item(iListItemType, iListItemStyle, html, isActive, Classes, hrefOrUserAction);
    return list_item;
};

/*
/*#################################################################*/
// Nav (Simple)
/*#################################################################*/
/*link*/
function iNavLink(html, Classes){
    this.Link = null;
    this._init(html, Classes);
    this.ColContainer = null;
};
iNavLink.prototype.Get = function(){
    return this.Link;
};
iNavLink.prototype.GetCollapse = function(){
    return this.ColContainer;
};
iNavLink.prototype.Remove = function(){
    RemoveElement(this.Link);
};
iNavLink.prototype._init = function (html, Classes) {
    this.Link = CreateElement('li',{});
    this.Link.AddClass(Classes);
    this.Link.EquateHTML(html);
};
iNavLink.prototype.AddHtml = function (html) {
    if(this.ColContainer!==null){
        this.ColContainer.EquateHTML(html);
    }else{
        this.Link.EquateHTML(html);
    };

};
iNavLink.prototype.AddCollapsed = function (buttonName, html) {
    this.Link.EquateHTML('');
    var id = Uniq_ID();
    var button = CreateElement('button',{innerHTML:buttonName, class:'btn d-inline-flex align-items-center rounded collapsed',
        'data-bs-toggle':"collapse",
        'data-bs-target':"#"+id,
        'aria-expanded':"false",
        'aria-current':'false'
    });

    this.ColContainer = new iCollapse();
    var col = this.ColContainer.CreateCollapseContainer(html,false);
    col.setAttribute('id', id);

    this.Link.EquateHTML(button.outerHTML, this.ColContainer.Get().outerHTML);
    this.ColContainer = $('#'+id)[0];
};


/*list*/
function iNavList(Classes){
    this.List = null;
    this.Links = [];
    this._init(Classes);
};
iNavList.prototype.Get = function () {
    return this.List;
};
iNavList.prototype.Remove = function(){
    RemoveElement(this.List);
};
iNavList.prototype.GetLink = function (n) {
    return this.Links[n];
};
iNavList.prototype._init = function (Classes) {
    this.List = CreateElement('ul',{});
    this.List.AddClass(Classes);
};
iNavList.prototype.AddLink = function (html, Classes) {
    var link = new iNavLink(html, Classes);
    this.List.appendChild(link.Get());
    this.Links.push(link);
    return link;
};
/*nav*/
function iNav(Classes){
    this.Nav = null;
    this.Lists = [];
    this._init(Classes);
};
iNav.prototype.Get = function () {
    return this.Nav;
};

iNav.prototype._init = function (Classes) {
    this.Nav = CreateElement('nav',{class:'list-unstyled'});
    this.Nav.AddClass(Classes);
};
/*
* @returns {iNavList}
* */
iNav.prototype.AddList = function (Classes) {
    var list = new iNavList(Classes);
    this.Nav.appendChild(list.Get());
    this.Lists.push(list);
    return list;
};


/*
/*#################################################################*/
// Bar
/*#################################################################*/
function iBar(iBarTheme, NavBarClasses) {
    this.Bar = null;
    this.BarAppendContainer = null;
    this.ResponseContainer = null;
    this.Param = {};
    this._init(iBarTheme, NavBarClasses);
};

iBar.Theme = {
    DARK:'navbar-dark',
    LIGHT:'navbar-light',
    NONE:''
};
iBar.prototype.Get = function(){
    return this.Bar;
};
iBar.prototype._init = function (iBarTheme, NavBarClasses) {
    //navbar
    this.Bar = CreateElement('nav', {class:'nav'});
    this.Bar.AddClass(iBarTheme);
    this.Bar.AddClass(NavBarClasses);
    this._initRow();
    this._initResponse();
};
iBar.prototype._initRow = function () {
    this.BarAppendContainer = CreateElement('div',{class:'container-fluid'});
    this.Bar.appendChild(this.BarAppendContainer);
};
iBar.prototype._initResponse = function(){
    var id = Uniq_ID();

    var button = CreateElement('button',{
        class:'navbar-toggler',
        type:'button',
        'data-bs-toggle':'collapse',
        'data-bs-target':'#'+id,
        'aria-controls':id,
        'aria-expanded':"false",
        'aria-label':"Navigation",
        innerHTML:'<span class="navbar-toggler-icon"></span>'
    });
    this.ResponseContainer = CreateElement('div',{class:'collapse navbar-collapse', id:id});
    this.BarAppendContainer.appendChilds(button, this.ResponseContainer);

};

iBar.prototype.AddBrandToGlobal = function (html, href) {
    var brand = CreateElement('a',{class:'navbar-brand'});
    if(empty(href)){
        brand.href = 'javascript:void(0)';
    };
    brand.EquateHTML(html);
    this.BarAppendContainer.appendChild(brand);
};
iBar.prototype.AddBrandToResponse = function () {

};
/*
/*#################################################################*/
// DateTime
/*#################################################################*/
function iDateTime(some_input) {
    this.GContainer = null;
    this.CalendarInput = some_input;
    this.Calendar = null;
    this.Place = {
        title:null,title_val:null,
        year:null,
        month:null,
        month_btn_left:null,
        month_btn_right:null,

        year_input:null,month_button:null,

        days_collapse:null,
        month_collapse:null, month_table:null,
        time_collapse:null, time_table:null,

        time_hours_input:null, time_minutes_input:null, time_seconds_input:null
    };
    this.Val = {
        year:null,
        month:null,
        day:null,
        week:null,
        hours:null,
        minutes:null,
        secunds:null,
        selected_day_id:null
    };
    this.Active = {
        isYear:true,
        isMonth:true,
        isMonthDays:true,
        isHours:true,
        isMinutes:true,
        isSeconds:true
    };
    this.static = {
        month:[{},
            { max:31, n:'01',l:'Январь', s:'Янв'},
            { max:28, n:'02',l:'Февраль', s:'Фев'},
            { max:31, n:'03',l:'Март', s:'Мар'},
            { max:30, n:'04',l:'Апрель', s:'Апр'},
            { max:31, n:'05',l:'Май', s:'Май'},
            { max:30, n:'06',l:'Июнь', s:'Июн'},
            { max:31, n:'07',l:'Июль', s:'Июл'},
            { max:31, n:'08',l:'Август', s:'Авг'},
            { max:30, n:'09',l:'Сентябрь', s:'Сен'},
            { max:31, n:'10',l:'Октябрь', s:'Окт'},
            { max:30, n:'11',l:'Ноябрь', s:'Ноя'},
            { max:31, n:'12',l:'Декабрь', s:'Дек'}
        ],
        week:[{},
            {n:1, l:'Понедельник',s:'Пн'},
            {n:2, l:'Вторник',s:'Вт'},
            {n:3, l:'Среда',s:'Ср'},
            {n:4, l:'Четверг',s:'Чт'},
            {n:5, l:'Пятница', s:'Пт'},
            {n:6, l:'Суббота', s:'Сб'},
            {n:7, l:'Воскресенье',s:'Вс'}
        ]
    };
    this._init_GContainer();
    this._init_Input();
    this._init_Calendar();
};
iDateTime.prototype._updateTitle = function(){
    //Week, day month year v hours:minutes:seconds
    var title = '';
    if(this.Val.week!==null){
        title += this.static.week[this.Val.week].l;
    };
    if(this.Val.day!==null){
        title += ', '+this.Val.day+' ';
    };
    if(this.Val.month!==null){
        title += this.static.month[this.Val.month].l+' ';
    };
    if(this.Val.year!==null){
        title += this.Val.year;
    };
    if(this.Val.hours!==null){
        title += ' в '+this.Val.hours;
    };
    if(this.Val.minutes!==null){
        title += ':'+this.Val.minutes;
    };
    if(this.Val.secunds!==null){
        title += ':'+this.Val.secunds;
    };
    this.Place.title_val.innerHTML = title;
};
iDateTime.prototype._checkYear = function(){
    var y = parseInt(this.Place.year_input.value);
    if(y>=1800 && y<=3000){
        this.Val.year = y;
    }else
    if(y<1800){
        this.Val.year = 1800;
        this.Place.year_input.value = 1800;
    }else
    if(y>2900){
        this.Val.year = 2900;
        this.Place.year_input.value = 2900;
    }else{
        this.Val.year = 2022;
        this.Place.year_input.value = 2022;
    };
    this._completeYear(this.Val.year);
};
iDateTime.prototype._completeYear = function(year){
    if(isVisakosny(year)){
        this.static.month[2].max = 29;
    };
};
iDateTime.prototype._day_button = function(day, month, week, isDark){
    var button = CreateElement('div', {class:'scday', innerHTML:day});
    if(isDark){
        button.AddClass('mutted');
    };
    if('daysel-'+day+month+this.Val.year==this.Val.selected_day_id ){
        button.AddClass('sel');
    };
    var This = this;
    button.onclick = function (){
        This.Val.day = day;
        This.Val.month = month;
        This.Val.week = week;
        $(".scday").each(function() {
            $(this)[0].RemoveClass('sel');
        });
        button.AddClass('sel');
        This.Val.selected_day_id = 'daysel-'+day+month+This.Val.year;
        This._updateTitle();
    };
    return button;
};
iDateTime.prototype._completeMonthDays = function(month){

    var weeknum = getWeekOfFirstDay(month, this.Val.year);

    this.Place.days_table.AddBodyRow();
    var week_counter = 1;
    if(weeknum!=1){
        var nez = 1;
        var month_past = month-1;
        var days_past = this.static.month[month_past].max+1;
        days_past = days_past-weeknum;

        //PAST MONTH
        while(nez<weeknum){
            if(month>1){
                days_past++;
                this.Place.days_table.AddBodyCol(this._day_button(days_past, month_past,weeknum, true));

                week_counter++;
            }else{
                this.Place.days_table.AddBodyCol('');
                week_counter++;
            };

            nez++;
        };
    };
    //CURRENT MONTH
    nez=1;
    while(nez<=this.static.month[month].max){
        if(week_counter>7){
            this.Place.days_table.AddBodyRow();
            week_counter=1;
        };
        this.Place.days_table.AddBodyCol(this._day_button(nez, month, week_counter));
        week_counter++;
        nez++;
    };

    //NEXT MONTH
    var i=1;
    if(month<12){
        while (week_counter<=7){
            this.Place.days_table.AddBodyCol(this._day_button(i, month+1, week_counter, true));
            week_counter++;
            i++;
        };
    };

};
iDateTime.prototype._init_Row_time = function(){
    this.Place.time = CreateElement('div', {class:'d-flex flex-row justify-content-center flex-wrap'});
    var colc = CreateElement('div', {class:'flex-shrink-1 flex-fill d-grid gap-2'});
    this.Place.time_button = CreateElement('button', {class:'btn btn-sm text-white'});
    this.Place.time_button.EquateHTML('Время');
    this.Place.time_button.addEventListener('click', this._press_time.bind(this), false);
    colc.appendChild(this.Place.time_button);

    this.Place.time.appendChilds(colc);

    this.Calendar.appendChild(this.Place.time);
};
iDateTime.prototype._press_month = function(){
    if(isset(this.Place.time_collapse)){this.Place.time_collapse.Hide();};
    this.Place.month_collapse.Toggle();
};
iDateTime.prototype._press_time = function(){
    this.Place.month_collapse.Hide();
    this.Place.time_collapse.Toggle();
};
iDateTime.prototype.Get = function(){return this.GContainer;};
iDateTime.prototype.GetDay = function(){};
iDateTime.prototype.GetMonth = function(){};
iDateTime.prototype.GetYear = function(){};
iDateTime.prototype.GetHours = function(){};
iDateTime.prototype.GetMinutes = function(){};
iDateTime.prototype.GetSeconds = function(){};
iDateTime.prototype.GetUT= function(){};
iDateTime.prototype._inputSetYear = function(year){};
iDateTime.prototype._inputSetMonth = function(month){};
iDateTime.prototype._inputSetDay = function(day){};
iDateTime.prototype._inputSetDateTime = function(time){};
iDateTime.prototype._inputSetDate = function(time){};
iDateTime.prototype._inputSetTime = function(hours, minutes, secunds){};
iDateTime.prototype._inputSetHours = function(hours){};
iDateTime.prototype._inputSetMinutes = function(minutes){};
iDateTime.prototype._inputSetSeconds = function(seconds){};
iDateTime.prototype.SetTitle = function(title){};
iDateTime.prototype.SetYear = function(time){};
iDateTime.prototype.SetMonth = function(time){};
iDateTime.prototype.SetDateTime = function(time){};
iDateTime.prototype.SetDate = function(time){};
iDateTime.prototype.SetTime = function(time){};

iDateTime.prototype._init_GContainer = function() {
    this.GContainer = CreateElement('div',{class:'sc-d position-relative'});
};
iDateTime.prototype._init_Input = function() {
    this.GContainer.appendChild(this.CalendarInput);
};
//<div class="sc-c text-white bg-success position-absolute w-100 p-1">
iDateTime.prototype._init_Calendar = function () {
    this.Calendar = CreateElement('div',{class:'sc-c text-white bg-success position-absolute w-100 p-1'});
    this.GContainer.appendChild(this.Calendar);
};

iDateTime.prototype._init_Row_title = function(title){

    this.Place.title = CreateElement('div',{class:'row text-center'});
    this.Place.title_val = CreateElement('div',{class:'col-12 fw-lighter'});

    this.Place.title.appendChild(this.Place.title_val);
    this.Place.title_val.EquateHTML(title);
    this.Calendar.appendChild(this.Place.title);
};
iDateTime.prototype._init_Row_year = function(year){

    this.Place.year = CreateElement('div',{class:'row'});
    var col = CreateElement('div',{class:'col-sm-12 text-center d-grid gap-2'});
    this.Place.year_input = CreateElement('input',{type:'number', class:'form-control sc-date oneline fs-5 text-white'});
    col.appendChild(this.Place.year_input);
    var This = this;
    this.Place.year_input.onchange = function () {
        This._checkYear();
        This._changeYear();
    };
    if(isset(year)){
        this.Place.year_input.value = year;
        this.Val.year = year;
    };

    this.Place.year.appendChild(col);

    this.Calendar.appendChild(this.Place.year);
};
iDateTime.prototype._init_Row_month = function(month){
    var This = this;
    this.Place.month = CreateElement('div', {class:'d-flex flex-row justify-content-between flex-wrap'});
    var coll = CreateElement('div', {class:''});
    this.Place.month_btn_left = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:'<i class="bi bi-chevron-double-left"></i>'});
    this.Place.month_btn_left.onclick = function(){
        This._changeMonthLeft();
    };
    coll.appendChild(this.Place.month_btn_left);

    var colc = CreateElement('div', {class:'flex-shrink-1 flex-fill d-grid gap-2'});
    this.Place.month_button = CreateElement('button', {class:'btn btn-sm text-white fs-5'});
    if(isset(this.static.month[month])){
        this.Place.month_button.EquateHTML(this.static.month[month].l);
    };
    this.Place.month_button.addEventListener('click', this._press_month.bind(this), false);

    var colr = CreateElement('div', {class:''});
    this.Place.month_btn_right = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:'<i class="bi bi-chevron-double-right"></i>'});
    this.Place.month_btn_right.onclick = function(){
        This._changeMonthRight();
    };
    colr.appendChild(this.Place.month_btn_right);
    colc.appendChild(this.Place.month_button);

    this.Place.month.appendChilds(coll, colc, colr);

    this.Calendar.appendChild(this.Place.month);
};
/*Change MONTH*/
iDateTime.prototype._changeMonthLeft = function(){
    if(this.Val.month==1){
        this.Val.month = 12;
    }else{
        this.Val.month--;
    };
    this._changeMonth(this.Val.month);
};
iDateTime.prototype._changeMonthRight = function(){
    if(this.Val.month==12){
        this.Val.month = 1;
    }else{
        this.Val.month++;
    };
    this._changeMonth(this.Val.month);
};
iDateTime.prototype._changeMonth = function(month){
    this.Val.month = month;
    this.Place.days_table.ClearBody();
    this._completeMonthDays(month);
    this.Place.month_button.innerHTML = this.static.month[month].l;
};
iDateTime.prototype._changeYear = function(){
    this._changeMonth(this.Val.month);
};
iDateTime.prototype._init_Collapse_month = function(){

    this.Place.month_collapse = new iCollapse();
    this.Place.month_collapse.CreateCollapseContainer('',false);

    this.Place.month_table = new iTable(iTable.Border.NO_BORDER, iTable.Size.SMALL);

    this.Place.month_table.CreateTable();
    this.Place.month_table.Table.AddClass('text-white text-center align-middle');
    this.Place.month_table.AddBodyRow();
    var This = this;
    var kv = ['I к','II к','III к','IV к'];
    var r=1; var k=0;
    var button_kv = CreateElement('button', {class:'btn btn-sm text-white fw-bold',innerHTML:kv[k]});button_kv.onclick= function () {};
    this.Place.month_table.AddBodyCol(button_kv);
    for(var m=1; m<this.static.month.length; m++){
        if(r==4){
            this.Place.month_table.AddBodyRow();
            r=1;
            k++;
            var button_kv = CreateElement('button', {class:'btn btn-sm text-white fw-bold',innerHTML:kv[k]});button_kv.onclick= function () {};
            this.Place.month_table.AddBodyCol(button_kv);
        };

        var button = CreateElement('button', {class:'btn btn-sm text-white',innerHTML:this.static.month[m].s});
        button.addEventListener('click', this._changeMonth.bind(this,m), false);
        this.Place.month_table.AddBodyCol(button);
        r++;
    };

    this.Place.month_collapse.SetHtml(this.Place.month_table.GetAll());
    this.Calendar.appendChild(this.Place.month_collapse.Get());
};
iDateTime.TYPE_SELECT = {
    ONLY_DATE:0,
    ONLY_TIME:1,
    DATE_TIME:2
};
iDateTime.TYPE_TIME = {
    WITH_SECONDS:true,
    WITHOUT_SECONDS:false
};
iDateTime.prototype._check_hours = function(){
    var v = parseInt(this.Place.time_hours_input.value.trim());
    if(v>23){
        this.Place.time_hours_input.value = 23;
    }else
    if(v<0){
        this.Place.time_hours_input.value = '00';
    }else
    if(v>-1 && v<10){
        this.Place.time_hours_input.value = '0'+v;
    }else
    if(v>9 && v<24){
        this.Place.time_hours_input.value = v;
    }else{
        this.Place.time_hours_input.value = '00';
    };
    this.Val.hours = this.Place.time_hours_input.value;
    this._updateTitle();
};
iDateTime.prototype._check_minutes = function(){
    var v = parseInt(this.Place.time_minutes_input.value.trim());
    if(v>59){this.Place.time_minutes_input.value = 59;}else if(v<0){this.Place.time_minutes_input.value = '00';}else if(v>-1 && v<10){this.Place.time_minutes_input.value = '0'+v;}else if(v>9 && v<60)
    {this.Place.time_minutes_input.value = v;}else{this.Place.time_minutes_input.value = '00';};this.Val.minutes = this.Place.time_minutes_input.value;this._updateTitle();
};
iDateTime.prototype._check_seconds = function(){
    var v = parseInt(this.Place.time_seconds_input.value.trim());
    if(v>59){this.Place.time_seconds_input.value = 59;}else
    if(v<0){this.Place.time_seconds_input.value = '00';}else
    if(v>-1 && v<10){this.Place.time_seconds_input.value = '0'+v;}else
    if(v>9 && v<60){this.Place.time_seconds_input.value = v;}else{this.Place.time_seconds_input.value = '00';};this.Val.secunds = this.Place.time_seconds_input.value;this._updateTitle();
};
iDateTime.prototype._up_hour = function(){
    var v = parseInt(this.Place.time_hours_input.value);
    if(v>22){this.Place.time_hours_input.value = 0;}else{v++;this.Place.time_hours_input.value = v;};
    this._check_hours();
};
iDateTime.prototype._up_minutes = function(){
    var v = parseInt(this.Place.time_minutes_input.value);
    if(v>58){this.Place.time_minutes_input.value = 0;
    }else{v++;this.Place.time_minutes_input.value = v;};
    this._check_minutes();
};
iDateTime.prototype._up_seconds = function(){
    var v = parseInt(this.Place.time_seconds_input.value);
    if(v>58){this.Place.time_seconds_input.value = 0;
    }else{v++;this.Place.time_seconds_input.value = v;};
    this._check_seconds();
};
iDateTime.prototype._down_hour = function(){
    var v = parseInt(this.Place.time_hours_input.value);
    if(v<1){this.Place.time_hours_input.value = 23;
    }else{v--;this.Place.time_hours_input.value = v;};
    this._check_hours();
};
iDateTime.prototype._down_minutes = function(){
    var v = parseInt(this.Place.time_minutes_input.value);
    if(v<1){this.Place.time_minutes_input.value = 59;
    }else{v--;this.Place.time_minutes_input.value = v;};
    this._check_minutes();
};
iDateTime.prototype._down_seconds = function(){
    var v = parseInt(this.Place.time_seconds_input.value);
    if(v<1){this.Place.time_seconds_input.value = 59;
    }else{v--;this.Place.time_seconds_input.value = v;};
    this._check_seconds();
};

iDateTime.prototype._init_Collapse_time = function(isHaveSeconds){
    var iss = istrue(isHaveSeconds);
    var up = '<i class="bi bi-chevron-up"></i>';
    var down = '<i class="bi bi-chevron-down"></i>';
    var This = this;
    var button_hours_up = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:up});button_hours_up.onclick= function () {This._up_hour();};
    var button_minutes_up = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:up});button_minutes_up.onclick= function () {This._up_minutes();};
    var button_seconds_up = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:up});button_seconds_up.onclick= function () {This._up_seconds();};
    var button_hours_down = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:down});button_hours_down.onclick = function () {This._down_hour();};
    var button_minutes_down = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:down});button_minutes_down.onclick = function () {This._down_minutes();};
    var button_seconds_down = CreateElement('button', {class:'btn btn-sm text-white fs-5',innerHTML:down});button_seconds_down.onclick= function () {This._down_seconds();};
    this.Place.time_collapse = new iCollapse();
    this.Place.time_collapse.CreateCollapseContainer('', false);

    this.Place.time_table = new iTable(iTable.Border.NO_BORDER,iTable.Size.SMALL);
    this.Place.time_table.CreateTable();
    this.Place.time_table.Table.AddClass('text-white text-center');
    this.Place.time_table.AddBodyRow();
    this.Place.time_table.AddBodyCol(button_hours_up);
    this.Place.time_table.AddBodyCol(button_minutes_up);
    if(iss){this.Place.time_table.AddBodyCol(button_seconds_up);};

    this.Place.time_table.AddBodyRow();
    this.Place.time_table.AddBodyCol('Час');
    this.Place.time_table.AddBodyCol('Мин');
    if(iss){this.Place.time_table.AddBodyCol('Сек');};

    this.Place.time_table.AddBodyRow();
    this.Place.time_hours_input = CreateElement('input',{type:'number', class:'form-control sc-date oneline fs-5 text-white'});
    this.Place.time_hours_input.onchange = function () { This._check_hours();};
    this.Place.time_table.AddBodyCol(this.Place.time_hours_input);
    this.Place.time_minutes_input = CreateElement('input',{type:'number', class:'form-control sc-date oneline fs-5 text-white'});
    this.Place.time_minutes_input.onchange = function () {This._check_minutes();};
    this.Place.time_table.AddBodyCol(this.Place.time_minutes_input);
    if(iss){
        this.Place.time_seconds_input = CreateElement('input',{type:'number', class:'form-control sc-date oneline fs-5 text-white'});
        this.Place.time_seconds_input.onchange = function () {This._check_seconds();};
        this.Place.time_table.AddBodyCol(this.Place.time_seconds_input);
    };
    this.Place.time_table.AddBodyRow();
    this.Place.time_table.AddBodyCol(button_hours_down);
    this.Place.time_table.AddBodyCol(button_minutes_down);
    if(iss){this.Place.time_table.AddBodyCol(button_seconds_down)};


    this.Place.time_collapse.SetHtml(this.Place.time_table.GetAll());

    this.Calendar.appendChild(this.Place.time_collapse.Get());
};
iDateTime.prototype._init_Collapse_days = function(){
    this.Place.days_collapse = new iCollapse();
    this.Place.days_collapse.CreateCollapseContainer('',true);

    this.Place.days_table = new iTable(iTable.Border.NO_BORDER,iTable.Size.SMALL);
    this.Place.days_table.CreateTable();
    this.Place.days_table.AddHeadRow();
    for(var w=1; w<this.static.week.length; w++){
        this.Place.days_table.AddHeadCol(this.static.week[w].s);
    };
    this.Place.days_table.Table.AddClass('text-white text-center');

    this.Place.days_collapse.SetHtml(this.Place.days_table.GetAll());


    this.Calendar.appendChild(this.Place.days_collapse.Get());
};

iDateTime.prototype._init_Struct = function (iDateTimeTYPE_SELECT, iDateTimeTYPE_TIME) {
    //date
    //time (with seconds or not)
    //date and time (with seconds or not)
    if(iDateTimeTYPE_SELECT!=iDateTime.TYPE_SELECT.ONLY_TIME){
        this.Val.year = 2022;
    };
    this._init_Row_title('_');
    if(iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.DATE_TIME || iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.ONLY_DATE){
        this._init_Row_year(2022);
        this._init_Row_month(3);
    };
    if(iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.DATE_TIME || iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.ONLY_TIME){
        this._init_Row_time();
    };

    this._init_Collapse_month();
    if(iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.DATE_TIME || iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.ONLY_TIME){

        this._init_Collapse_time(iDateTimeTYPE_TIME);
    };
    if(iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.DATE_TIME || iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.ONLY_DATE){
        this._init_Collapse_days();
        this._changeMonth(3);
    };
    if(iDateTimeTYPE_SELECT==iDateTime.TYPE_SELECT.ONLY_TIME){
        this._press_time();
    };

    this.SetUTime(time());
};
iDateTime.prototype.SetUTime = function(time){
    var u = unix(time);

    console.log(u.Day());
    console.log(u.Month());
    console.log(u.Year());

    console.log(u.Hours());
    console.log(u.Minutes());
    console.log(u.Year());
};



/*
/*#################################################################*/
// ScrollSpy
/*#################################################################*/
function iScrollSpy() {

};


/*
/*#################################################################*/
// Loaders && Spiners
/*#################################################################*/
function iLoad(iLoadType) {

};
iLoad.Type = {
    SPINNER_BORDER:'',
    SPINNER_GROW:'',
    DOTS:''
};


/*#################################################################*/
// Files && Images Browser
/*#################################################################*/
function iBrowser() {

};
