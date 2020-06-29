# DBMS2020
 資料庫系統期末專案
# #我要種肌肉
ER Model: [ER Model](https://github.com/amber0725/DBMS2020/blob/master/ER%20Model.pdf)<br>
Relational Model: [Relational Model](https://github.com/amber0725/DBMS2020/blob/master/Relational%20Model.pdf)

## 系統說明
### 動機
Working out has gradually become an indispensable role in modern lifestyle, indicating
people value their health more than ever. Beginning with the view of working out, we hope to
be the one to make a progress on people’s way to fitness, by monitoring their active status
when working out as well as the static body status in daily routine.
<br>
But how exactly can we make this come true?
<br>
With a personal health management database system that stores data to keep track of
user’s training, diet, and medical history, users can gain insights from the personal data they
input, such as some of the following examples:
<br>
- Workout Performance Evaluation
<br>
Ensure the efforts on diet and workout are on the right track toward specific fitness
goal.
<br>
- Diet
<br>
Calculate personal Total Daily Energy Expenditure (TDEE) with the attributes in
database, including body fat rate, sex, height, weight. If intake 1 is more than TDEE,
notice on diet plan adjustment can be given.
<br>
Besides general users, our business partners can also take advantage of this database
system by extracting figures:
<br>
- Operation Management
<br>
Discover the correlation between the distance among user’s place and workout
venues and workout frequency, which may provide fitness centers some advices,
e.g., figures show that the neighborhood account for most of the entrants to a fitness
center, the manager of the fitness center can reevaluate the spending on advertising,
raising the proportion of that on potential customers from the neighborhood. Making
the most of financial resources of the fitness center.
<br>
- Health Management
<br>
Provide real data for versatile medical studies, e.g., analyse the correlation between
chronic diseases and workout (muscular) performances.

 ### 系統功能分析
 1. Member works out in train houses.
 <br>
 2. Member can work out in different train houses.
 <br>
 3. Member eats more than one meals per day.
 <br>
 4. Member can workout more than once per day.
 <br>
 5. Body composition for a person must be no less than two records so that body composition change exists.

 ### 資料需求分析
 1. We store member’s personal ID, gender, age, height, address and entered day.
 <br>
 2. Every member is no less than 18 years old, so their heights remain the same.
 <br>
 3. We record the training place that people go to and also the fee.
 <br>
 4. We record every member’s daily meals with fat, carbon hydrate and protein.
 <br>
 5. We record every member’s training history including training parts, reps, sets, weight,
 and training place.
 <br>
 6. We record every member’s body composition including weight and body fat rate.
 <br>
 7. We record every member’s chronic diseases, blood sugar, lipid, blood pressure.
 <br>
 8. Member’s weight change and body fat rate change are recorded on the relationship
 of member and body composition.

## 系統架構
 1. 系統功能：紀錄、產生記錄相關分析<br>
 2. 系統開發的程式語⾔：<br>
      Front-End Layer : JavaScript<br>
      Application Layer : Express.js<br>
      Database Server : PostgreSQL<br>
 3. DBMS與工具：PostgreSQL , WebStorm<br>
 4. 系統模組<br>
     - 首頁：<br>
        一般用戶：註冊/登入<br>
        健身機構用戶：註冊/登入<br>
     - 一般用戶登入後畫面：訓練紀錄/身體紀錄/飲食紀錄/全台數據分析<br>
     - 訓練紀錄畫面：選擇是否新增新紀錄後，顯示訓練歷史紀錄相關分析與圖表。<br>
     - 身體紀錄畫面：選擇是否新增新紀錄後，顯示身體歷史紀錄相關分析與圖表。<br>
     - 飲食紀錄畫面：選擇是否新增新紀錄後，顯示飲食歷史紀錄相關分析與圖表。<br>
     - 健身機構用戶登入後畫面：顧客紀錄/附近註冊同業<br>
     - 顧客紀錄畫面：顯示選擇日期區間的來店顧客紀錄，每個紀錄顧客訓練部位分層。<br>
     - 附近註冊同業畫面：顯示附近有哪些使用本服務的同業<br>
     - 全台數據分析 :<br>
         顯示目前資料中用戶患有疾病與健身成效的關係圖表<br>
     - 一般用戶註冊 :<br>
         輸入 身分證字號、出生年月日、性別、地址<br>
     -健身機構註冊 :<br>
         輸入 營業登記字號、健身機構名稱、地址、價格<br>
