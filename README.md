# DBMS2020
 資料庫系統期末專案
# #我要種肌肉
ER Model: [ER Model](https://github.com/amber0725/DBMS2020/blob/master/ER%20Model.pdf)
Relational Model: [Relational Model](https://github.com/amber0725/DBMS2020/blob/master/Relational%20Model.pdf)

# ##系統架構
 1. 系統功能：紀錄、產生記錄相關分析
 2. 系統開發的程式語⾔：
      Front-End Layer : Python
      Application Layer : Flask
      Database Server : PostgreSQL
 3. DBMS與工具：PostgreSQL , WebStorm
 4. 系統模組
     - 首頁：
        一般用戶：註冊/登入
        健身機構用戶：註冊/登入
     - 一般用戶登入後畫面：訓練紀錄/身體紀錄/飲食紀錄/全台數據分析
     - 訓練紀錄畫面：選擇是否新增新紀錄後，顯示訓練歷史紀錄相關分析與圖表。
     - 身體紀錄畫面：選擇是否新增新紀錄後，顯示身體歷史紀錄相關分析與圖表。
     - 飲食紀錄畫面：選擇是否新增新紀錄後，顯示飲食歷史紀錄相關分析與圖表。
     - 健身機構用戶登入後畫面：顧客紀錄/附近註冊同業
     - 顧客紀錄畫面：顯示選擇日期區間的來店顧客紀錄，每個紀錄顧客訓練部位分層。
     - 附近註冊同業畫面：顯示附近有哪些使用本服務的同業
     - 全台數據分析 :
         顯示目前資料中用戶患有疾病與健身成效的關係圖表
     - 一般用戶註冊 :
         輸入 身分證字號、出生年月日、性別、地址
     -健身機構註冊 :
         輸入 營業登記字號、健身機構名稱、地址、價格
