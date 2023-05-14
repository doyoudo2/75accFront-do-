import { accountApi } from '@/api'

const ACCOUNT_URL = '/acc/accounts'
const ACCOUNT_CODE_URL = '/acc/account/'
const CURRENT_ASSET_LIST_URL = '/currentAsset/assetList'
const CURRENT_ASSET_CODE_LIST_URL = '/account/account/accountList'
const FIND_CURRENT_ASSET_BY_CODE_LIST = '/currentAsset/findAssetByCodeList'
const FIND_CURRENT_ASSET_BY_NAME_LIST = '/currentAsset/findAssetByNameList'


/**
 * 자산 전체조회
 * @param assetList
 * @returns {*}
 */
function fetchCurrentAssetList() {
    return accountApi.get(`${CURRENT_ASSET_LIST_URL}`)
}

/**
 * 자산 조건(acctCode) 조회
 * @param
 * @returns {*}
 */
function fetchFindAssetByCodeList(acctCode) {
    return accountApi.get(`/acc/currentAsset/findAssetByCodeList`, acctCode)
}

/**
 * 자산 조건(acctName) 조회
 * @param
 * @returns {*}
 */
function fetchFindAssetByNameList(acctName) {
    return accountApi.get(`/acc/currentAsset/findAssetByNameList`, acctName)
}

/**
 * 자산코드 전체조회
 * @param assetCode
 * @returns {*}
 */
function fetchAssetCodeList() {
    return accountApi.get(`${ACCOUNT_CODE_URL}`)
}


/**
 * 계정코드 조건에 따라 조회
 * @param searchCode
 * @returns {*}
 */
function fetchAccountCode(searchCode) {
    return accountApi.get(`/account/accountList`)
}

/**
 * 계정코드 전체조회
 * @param searchCode
 * @returns {*}
 */
function fetchAccountCodeList() {
    return accountApi.get(`${ACCOUNT_CODE_URL}`)
}

/**
 * 계정코드삭제
 * @param accountCode
 * @returns {*}
 */
function deleteAccountCode(accountInnerCode) {
    return accountApi.delete(`${ACCOUNT_CODE_URL}/${accountInnerCode}`)
}

/**
 * 계정과목 등록  requsetBody에 날라가 바로 bean에 맵핑되게 했다.
 * @param accountCode
 * @returns {*}
 */
function addAccountCode(accountCode) {
    return accountApi.post(`${ACCOUNT_CODE_URL}`, accountCode)
}

/**
 * 계정별원장
 */
function fetchAccountLedger(searchCode) {
    console.log(searchCode)
    const { accountCode, startDate, endDate } = searchCode
    return accountApi.get(`${ACCOUNT_URL}/${accountCode}`,
        {
            params: {
                startDate,
                endDate,
            },
        })
}

/**
 * 총계정원장
 */
function fetchGeneralAccountLedger(searchCode) {
    const { startDate, endDate } = searchCode
    return accountApi.get(`${ACCOUNT_URL}/`,
        {
            params: {
                startDate,
                endDate,
            },
        })
}

/**
 * 고객사조회
 * @returns {*}
 */
function fetchAccountCustomerCode() {
    let workPlaceCode = sessionStorage.getItem('WorkplaceCode')
    return accountApi.get('customer/customerList', {
        params: {
            workPlaceCode
        }
    })
}
/**
 * 컨트롤 코드조회
 * @returns {*}
 */
function fetchAccountControllCode() {
    return accountApi.get('/base/accountControllerCodes')
}

/**
 * 거래처조회 임시
 */
function searchCustomerInfoList() {
    return accountApi.get('/base/customers')
}

function deleteCustomerCode(customerCode){
    return accountApi.delete('/base/deleteNormalCustormer',
        {
            params:{customerCode}
        })
}

function saveCustomer(newCustomer){
    console.log("api  : ")
    console.log(newCustomer)
    return accountApi.post('/base/saveNewCustomer',newCustomer)
}

export {
    fetchAccountCode, fetchAccountCustomerCode, fetchAccountControllCode, fetchAccountLedger, fetchGeneralAccountLedger, fetchAccountCodeList, deleteAccountCode, addAccountCode, searchCustomerInfoList, deleteCustomerCode,saveCustomer,
    fetchAssetCodeList,
    fetchCurrentAssetList,
    fetchFindAssetByCodeList,
    fetchFindAssetByNameList,
}