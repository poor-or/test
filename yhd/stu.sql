/*
 Navicat Premium Data Transfer

 Source Server         : yao
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : stu

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 09/04/2020 21:25:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_city
-- ----------------------------
DROP TABLE IF EXISTS `tb_city`;
CREATE TABLE `tb_city`  (
  `cityLetter` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `city` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_city
-- ----------------------------
INSERT INTO `tb_city` VALUES ('A', '阿勒泰地区');
INSERT INTO `tb_city` VALUES ('A', '安顺市');
INSERT INTO `tb_city` VALUES ('A', '安庆市');
INSERT INTO `tb_city` VALUES ('A', '鞍山市');
INSERT INTO `tb_city` VALUES ('A', '阿坝州');
INSERT INTO `tb_city` VALUES ('A', '阿克苏地区');
INSERT INTO `tb_city` VALUES ('A', '安康市');
INSERT INTO `tb_city` VALUES ('A', '阿拉善盟');
INSERT INTO `tb_city` VALUES ('A', '阿里地区');
INSERT INTO `tb_city` VALUES ('A', '安阳市');
INSERT INTO `tb_city` VALUES ('A', '阿拉尔市');
INSERT INTO `tb_city` VALUES ('B', '北京');
INSERT INTO `tb_city` VALUES ('B', '滨州市');
INSERT INTO `tb_city` VALUES ('B', '博尔塔拉州');
INSERT INTO `tb_city` VALUES ('B', '毕节市');
INSERT INTO `tb_city` VALUES ('B', '蚌埠市');
INSERT INTO `tb_city` VALUES ('B', '巴音郭楞州');
INSERT INTO `tb_city` VALUES ('B', '保山市');
INSERT INTO `tb_city` VALUES ('B', '本溪市');
INSERT INTO `tb_city` VALUES ('B', '白沙县');
INSERT INTO `tb_city` VALUES ('B', '白城市');
INSERT INTO `tb_city` VALUES ('B', '保亭县');
INSERT INTO `tb_city` VALUES ('B', '北海市');
INSERT INTO `tb_city` VALUES ('B', '白山市');
INSERT INTO `tb_city` VALUES ('B', '保定市');
INSERT INTO `tb_city` VALUES ('B', '亳州市');
INSERT INTO `tb_city` VALUES ('B', '包头市');
INSERT INTO `tb_city` VALUES ('B', '白银市');
INSERT INTO `tb_city` VALUES ('B', '巴彦淖尔市');
INSERT INTO `tb_city` VALUES ('B', '百色市');
INSERT INTO `tb_city` VALUES ('B', '巴中市');
INSERT INTO `tb_city` VALUES ('B', '宝鸡市');
INSERT INTO `tb_city` VALUES ('C', '重庆');
INSERT INTO `tb_city` VALUES ('C', '昌吉州');
INSERT INTO `tb_city` VALUES ('C', '朝阳市');
INSERT INTO `tb_city` VALUES ('C', '长春市');
INSERT INTO `tb_city` VALUES ('C', '郴州市');
INSERT INTO `tb_city` VALUES ('C', '昌江县');
INSERT INTO `tb_city` VALUES ('C', '澄迈县');
INSERT INTO `tb_city` VALUES ('C', '昌都地区');
INSERT INTO `tb_city` VALUES ('C', '崇左市');
INSERT INTO `tb_city` VALUES ('C', '滁州市');
INSERT INTO `tb_city` VALUES ('C', '潮州市');
INSERT INTO `tb_city` VALUES ('C', '长治市');
INSERT INTO `tb_city` VALUES ('C', '承德市');
INSERT INTO `tb_city` VALUES ('C', '池州市');
INSERT INTO `tb_city` VALUES ('C', '赤峰市');
INSERT INTO `tb_city` VALUES ('C', '沧州市');
INSERT INTO `tb_city` VALUES ('C', '长沙市');
INSERT INTO `tb_city` VALUES ('C', '楚雄州');
INSERT INTO `tb_city` VALUES ('C', '常德市');
INSERT INTO `tb_city` VALUES ('C', '常州市');
INSERT INTO `tb_city` VALUES ('C', '成都市');
INSERT INTO `tb_city` VALUES ('D', '大连市');
INSERT INTO `tb_city` VALUES ('D', '东莞市');
INSERT INTO `tb_city` VALUES ('D', '东营市');
INSERT INTO `tb_city` VALUES ('D', '德州市');
INSERT INTO `tb_city` VALUES ('D', '丹东市');
INSERT INTO `tb_city` VALUES ('D', '定安县');
INSERT INTO `tb_city` VALUES ('D', '东方市');
INSERT INTO `tb_city` VALUES ('D', '大庆市');
INSERT INTO `tb_city` VALUES ('D', '定西市');
INSERT INTO `tb_city` VALUES ('D', '大同市');
INSERT INTO `tb_city` VALUES ('D', '迪庆州');
INSERT INTO `tb_city` VALUES ('D', '大兴安岭地区');
INSERT INTO `tb_city` VALUES ('D', '儋州市');
INSERT INTO `tb_city` VALUES ('D', '达州市');
INSERT INTO `tb_city` VALUES ('D', '大理州');
INSERT INTO `tb_city` VALUES ('D', '德宏州');
INSERT INTO `tb_city` VALUES ('D', '德阳市');
INSERT INTO `tb_city` VALUES ('E', '鄂尔多斯市');
INSERT INTO `tb_city` VALUES ('E', '鄂州市');
INSERT INTO `tb_city` VALUES ('E', '恩施州');
INSERT INTO `tb_city` VALUES ('F', '阜新市');
INSERT INTO `tb_city` VALUES ('F', '抚顺市');
INSERT INTO `tb_city` VALUES ('F', '防城港市');
INSERT INTO `tb_city` VALUES ('F', '阜阳市');
INSERT INTO `tb_city` VALUES ('F', '佛山市');
INSERT INTO `tb_city` VALUES ('F', '抚州市');
INSERT INTO `tb_city` VALUES ('F', '福州市');
INSERT INTO `tb_city` VALUES ('G', '广州市');
INSERT INTO `tb_city` VALUES ('G', '果洛州');
INSERT INTO `tb_city` VALUES ('G', '甘南州');
INSERT INTO `tb_city` VALUES ('G', '甘孜州');
INSERT INTO `tb_city` VALUES ('G', '贵港市');
INSERT INTO `tb_city` VALUES ('G', '桂林市');
INSERT INTO `tb_city` VALUES ('G', '固原市');
INSERT INTO `tb_city` VALUES ('G', '贵阳市');
INSERT INTO `tb_city` VALUES ('G', '赣州市');
INSERT INTO `tb_city` VALUES ('G', '广安市');
INSERT INTO `tb_city` VALUES ('G', '广元市');
INSERT INTO `tb_city` VALUES ('H', '惠州市');
INSERT INTO `tb_city` VALUES ('H', '菏泽市');
INSERT INTO `tb_city` VALUES ('H', '合肥市');
INSERT INTO `tb_city` VALUES ('H', '淮北市');
INSERT INTO `tb_city` VALUES ('H', '淮南市');
INSERT INTO `tb_city` VALUES ('H', '黄山市');
INSERT INTO `tb_city` VALUES ('H', '河源市');
INSERT INTO `tb_city` VALUES ('H', '怀化市');
INSERT INTO `tb_city` VALUES ('H', '葫芦岛市');
INSERT INTO `tb_city` VALUES ('H', '海西州');
INSERT INTO `tb_city` VALUES ('H', '黄南州');
INSERT INTO `tb_city` VALUES ('H', '哈尔滨市');
INSERT INTO `tb_city` VALUES ('H', '海北州');
INSERT INTO `tb_city` VALUES ('H', '邯郸市');
INSERT INTO `tb_city` VALUES ('H', '海南州');
INSERT INTO `tb_city` VALUES ('H', '湖州市');
INSERT INTO `tb_city` VALUES ('H', '海东地区');
INSERT INTO `tb_city` VALUES ('H', '哈密地区');
INSERT INTO `tb_city` VALUES ('H', '和田地区');
INSERT INTO `tb_city` VALUES ('H', '海口市');
INSERT INTO `tb_city` VALUES ('H', '杭州市');
INSERT INTO `tb_city` VALUES ('H', '鹤岗市');
INSERT INTO `tb_city` VALUES ('H', '衡水市');
INSERT INTO `tb_city` VALUES ('H', '汉中市');
INSERT INTO `tb_city` VALUES ('H', '呼和浩特市');
INSERT INTO `tb_city` VALUES ('H', '黄石市');
INSERT INTO `tb_city` VALUES ('H', '黑河市');
INSERT INTO `tb_city` VALUES ('H', '呼伦贝尔市');
INSERT INTO `tb_city` VALUES ('H', '河池市');
INSERT INTO `tb_city` VALUES ('H', '贺州市');
INSERT INTO `tb_city` VALUES ('H', '衡阳市');
INSERT INTO `tb_city` VALUES ('H', '红河州');
INSERT INTO `tb_city` VALUES ('H', '淮安市');
INSERT INTO `tb_city` VALUES ('H', '鹤壁市');
INSERT INTO `tb_city` VALUES ('H', '黄冈市');
INSERT INTO `tb_city` VALUES ('J', '江门市');
INSERT INTO `tb_city` VALUES ('J', '济源市');
INSERT INTO `tb_city` VALUES ('J', '锦州市');
INSERT INTO `tb_city` VALUES ('J', '嘉兴市');
INSERT INTO `tb_city` VALUES ('J', '金华市');
INSERT INTO `tb_city` VALUES ('J', '吉林市');
INSERT INTO `tb_city` VALUES ('J', '鸡西市');
INSERT INTO `tb_city` VALUES ('J', '揭阳市');
INSERT INTO `tb_city` VALUES ('J', '佳木斯市');
INSERT INTO `tb_city` VALUES ('J', '吉安市');
INSERT INTO `tb_city` VALUES ('J', '金昌市');
INSERT INTO `tb_city` VALUES ('J', '嘉峪关市');
INSERT INTO `tb_city` VALUES ('J', '晋中市');
INSERT INTO `tb_city` VALUES ('J', '九江市');
INSERT INTO `tb_city` VALUES ('J', '晋城市');
INSERT INTO `tb_city` VALUES ('J', '景德镇市');
INSERT INTO `tb_city` VALUES ('J', '酒泉市');
INSERT INTO `tb_city` VALUES ('J', '荆门市');
INSERT INTO `tb_city` VALUES ('J', '焦作市');
INSERT INTO `tb_city` VALUES ('J', '济南市');
INSERT INTO `tb_city` VALUES ('J', '荆州市');
INSERT INTO `tb_city` VALUES ('J', '济宁市');
INSERT INTO `tb_city` VALUES ('K', '昆明市');
INSERT INTO `tb_city` VALUES ('K', '克孜勒苏柯尔克孜自治州');
INSERT INTO `tb_city` VALUES ('K', '喀什地区');
INSERT INTO `tb_city` VALUES ('K', '克拉玛依市');
INSERT INTO `tb_city` VALUES ('K', '开封市');
INSERT INTO `tb_city` VALUES ('L', '辽阳市');
INSERT INTO `tb_city` VALUES ('L', '娄底市');
INSERT INTO `tb_city` VALUES ('L', '莱芜市');
INSERT INTO `tb_city` VALUES ('L', '临沧市');
INSERT INTO `tb_city` VALUES ('L', '聊城市');
INSERT INTO `tb_city` VALUES ('L', '临沂市');
INSERT INTO `tb_city` VALUES ('L', '乐东县');
INSERT INTO `tb_city` VALUES ('L', '陵水县');
INSERT INTO `tb_city` VALUES ('L', '临高县');
INSERT INTO `tb_city` VALUES ('L', '凉山州');
INSERT INTO `tb_city` VALUES ('L', '临夏州');
INSERT INTO `tb_city` VALUES ('L', '柳州市');
INSERT INTO `tb_city` VALUES ('L', '六盘水市');
INSERT INTO `tb_city` VALUES ('L', '六安市');
INSERT INTO `tb_city` VALUES ('L', '廊坊市');
INSERT INTO `tb_city` VALUES ('L', '龙岩市');
INSERT INTO `tb_city` VALUES ('L', '辽源市');
INSERT INTO `tb_city` VALUES ('L', '拉萨市');
INSERT INTO `tb_city` VALUES ('L', '兰州市');
INSERT INTO `tb_city` VALUES ('L', '来宾市');
INSERT INTO `tb_city` VALUES ('L', '丽水市');
INSERT INTO `tb_city` VALUES ('L', '林芝地区');
INSERT INTO `tb_city` VALUES ('L', '吕梁市');
INSERT INTO `tb_city` VALUES ('L', '陇南市');
INSERT INTO `tb_city` VALUES ('L', '临汾市');
INSERT INTO `tb_city` VALUES ('L', '丽江市');
INSERT INTO `tb_city` VALUES ('L', '连云港市');
INSERT INTO `tb_city` VALUES ('L', '洛阳市');
INSERT INTO `tb_city` VALUES ('L', '乐山市');
INSERT INTO `tb_city` VALUES ('L', '泸州市');
INSERT INTO `tb_city` VALUES ('L', '漯河市');
INSERT INTO `tb_city` VALUES ('M', '梅州市');
INSERT INTO `tb_city` VALUES ('M', '马鞍山市');
INSERT INTO `tb_city` VALUES ('M', '眉山市');
INSERT INTO `tb_city` VALUES ('M', '牡丹江市');
INSERT INTO `tb_city` VALUES ('M', '茂名市');
INSERT INTO `tb_city` VALUES ('M', '绵阳市');
INSERT INTO `tb_city` VALUES ('N', '宁波市');
INSERT INTO `tb_city` VALUES ('N', '南宁市');
INSERT INTO `tb_city` VALUES ('N', '那曲地区');
INSERT INTO `tb_city` VALUES ('N', '宁德市');
INSERT INTO `tb_city` VALUES ('N', '南平市');
INSERT INTO `tb_city` VALUES ('N', '南昌市');
INSERT INTO `tb_city` VALUES ('N', '南充市');
INSERT INTO `tb_city` VALUES ('N', '南京市');
INSERT INTO `tb_city` VALUES ('N', '内江市');
INSERT INTO `tb_city` VALUES ('N', '怒江州');
INSERT INTO `tb_city` VALUES ('N', '南阳市');
INSERT INTO `tb_city` VALUES ('N', '南通市');
INSERT INTO `tb_city` VALUES ('P', '盘锦市');
INSERT INTO `tb_city` VALUES ('P', '普洱市');
INSERT INTO `tb_city` VALUES ('P', '萍乡市');
INSERT INTO `tb_city` VALUES ('P', '平凉市');
INSERT INTO `tb_city` VALUES ('P', '莆田市');
INSERT INTO `tb_city` VALUES ('P', '平顶山市');
INSERT INTO `tb_city` VALUES ('P', '濮阳市');
INSERT INTO `tb_city` VALUES ('P', '攀枝花市');
INSERT INTO `tb_city` VALUES ('Q', '黔东南州');
INSERT INTO `tb_city` VALUES ('Q', '黔西南州');
INSERT INTO `tb_city` VALUES ('Q', '曲靖市');
INSERT INTO `tb_city` VALUES ('Q', '黔南州');
INSERT INTO `tb_city` VALUES ('Q', '琼中县');
INSERT INTO `tb_city` VALUES ('Q', '钦州市');
INSERT INTO `tb_city` VALUES ('Q', '衢州市');
INSERT INTO `tb_city` VALUES ('Q', '清远市');
INSERT INTO `tb_city` VALUES ('Q', '齐齐哈尔市');
INSERT INTO `tb_city` VALUES ('Q', '琼海市');
INSERT INTO `tb_city` VALUES ('Q', '秦皇岛市');
INSERT INTO `tb_city` VALUES ('Q', '七台河市');
INSERT INTO `tb_city` VALUES ('Q', '庆阳市');
INSERT INTO `tb_city` VALUES ('Q', '泉州市');
INSERT INTO `tb_city` VALUES ('Q', '潜江市');
INSERT INTO `tb_city` VALUES ('Q', '青岛市');
INSERT INTO `tb_city` VALUES ('R', '日照市');
INSERT INTO `tb_city` VALUES ('R', '日喀则地区');
INSERT INTO `tb_city` VALUES ('S', '上海');
INSERT INTO `tb_city` VALUES ('S', '沈阳市');
INSERT INTO `tb_city` VALUES ('S', '汕尾市');
INSERT INTO `tb_city` VALUES ('S', '商丘市');
INSERT INTO `tb_city` VALUES ('S', '汕头市');
INSERT INTO `tb_city` VALUES ('S', '深圳市');
INSERT INTO `tb_city` VALUES ('S', '韶关市');
INSERT INTO `tb_city` VALUES ('S', '三沙市');
INSERT INTO `tb_city` VALUES ('S', '石家庄市');
INSERT INTO `tb_city` VALUES ('S', '松原市');
INSERT INTO `tb_city` VALUES ('S', '神农架林区');
INSERT INTO `tb_city` VALUES ('S', '绍兴市');
INSERT INTO `tb_city` VALUES ('S', '三亚市');
INSERT INTO `tb_city` VALUES ('S', '四平市');
INSERT INTO `tb_city` VALUES ('S', '石河子市');
INSERT INTO `tb_city` VALUES ('S', '宿州市');
INSERT INTO `tb_city` VALUES ('S', '山南地区');
INSERT INTO `tb_city` VALUES ('S', '双鸭山市');
INSERT INTO `tb_city` VALUES ('S', '石嘴山市');
INSERT INTO `tb_city` VALUES ('S', '十堰市');
INSERT INTO `tb_city` VALUES ('S', '商洛市');
INSERT INTO `tb_city` VALUES ('S', '绥化市');
INSERT INTO `tb_city` VALUES ('S', '上饶市');
INSERT INTO `tb_city` VALUES ('S', '朔州市');
INSERT INTO `tb_city` VALUES ('S', '厦门市');
INSERT INTO `tb_city` VALUES ('S', '三明市');
INSERT INTO `tb_city` VALUES ('S', '随州市');
INSERT INTO `tb_city` VALUES ('S', '宿迁市');
INSERT INTO `tb_city` VALUES ('S', '邵阳市');
INSERT INTO `tb_city` VALUES ('S', '遂宁市');
INSERT INTO `tb_city` VALUES ('S', '苏州市');
INSERT INTO `tb_city` VALUES ('S', '三门峡市');
INSERT INTO `tb_city` VALUES ('T', '天津');
INSERT INTO `tb_city` VALUES ('T', '塔城地区');
INSERT INTO `tb_city` VALUES ('T', '泰安市');
INSERT INTO `tb_city` VALUES ('T', '铜陵市');
INSERT INTO `tb_city` VALUES ('T', '屯昌县');
INSERT INTO `tb_city` VALUES ('T', '通化市');
INSERT INTO `tb_city` VALUES ('T', '吐鲁番地区');
INSERT INTO `tb_city` VALUES ('T', '铜仁市');
INSERT INTO `tb_city` VALUES ('T', '天门市');
INSERT INTO `tb_city` VALUES ('T', '唐山市');
INSERT INTO `tb_city` VALUES ('T', '太原市');
INSERT INTO `tb_city` VALUES ('T', '天水市');
INSERT INTO `tb_city` VALUES ('T', '台州市');
INSERT INTO `tb_city` VALUES ('T', '铁岭市');
INSERT INTO `tb_city` VALUES ('T', '泰州市');
INSERT INTO `tb_city` VALUES ('T', '通辽市');
INSERT INTO `tb_city` VALUES ('T', '图木舒克市');
INSERT INTO `tb_city` VALUES ('T', '铜川市');
INSERT INTO `tb_city` VALUES ('W', '芜湖市');
INSERT INTO `tb_city` VALUES ('W', '潍坊市');
INSERT INTO `tb_city` VALUES ('W', '威海市');
INSERT INTO `tb_city` VALUES ('W', '五指山市');
INSERT INTO `tb_city` VALUES ('W', '文昌市');
INSERT INTO `tb_city` VALUES ('W', '温州市');
INSERT INTO `tb_city` VALUES ('W', '万宁市');
INSERT INTO `tb_city` VALUES ('W', '梧州市');
INSERT INTO `tb_city` VALUES ('W', '乌鲁木齐市');
INSERT INTO `tb_city` VALUES ('W', '吴忠市');
INSERT INTO `tb_city` VALUES ('W', '乌兰察布市');
INSERT INTO `tb_city` VALUES ('W', '乌海市');
INSERT INTO `tb_city` VALUES ('W', '五家渠市');
INSERT INTO `tb_city` VALUES ('W', '武汉市');
INSERT INTO `tb_city` VALUES ('W', '武威市');
INSERT INTO `tb_city` VALUES ('W', '文山州');
INSERT INTO `tb_city` VALUES ('W', '无锡市');
INSERT INTO `tb_city` VALUES ('W', '渭南市');
INSERT INTO `tb_city` VALUES ('X', '信阳市');
INSERT INTO `tb_city` VALUES ('X', '湘西州');
INSERT INTO `tb_city` VALUES ('X', '西宁市');
INSERT INTO `tb_city` VALUES ('X', '邢台市');
INSERT INTO `tb_city` VALUES ('X', '仙桃市');
INSERT INTO `tb_city` VALUES ('X', '襄阳市');
INSERT INTO `tb_city` VALUES ('X', '宣城市');
INSERT INTO `tb_city` VALUES ('X', '忻州市');
INSERT INTO `tb_city` VALUES ('X', '兴安盟');
INSERT INTO `tb_city` VALUES ('X', '新余市');
INSERT INTO `tb_city` VALUES ('X', '锡林郭勒盟');
INSERT INTO `tb_city` VALUES ('X', '湘潭市');
INSERT INTO `tb_city` VALUES ('X', '西双版纳州');
INSERT INTO `tb_city` VALUES ('X', '孝感市');
INSERT INTO `tb_city` VALUES ('X', '徐州市');
INSERT INTO `tb_city` VALUES ('X', '西安市');
INSERT INTO `tb_city` VALUES ('X', '新乡市');
INSERT INTO `tb_city` VALUES ('X', '咸宁市');
INSERT INTO `tb_city` VALUES ('X', '咸阳市');
INSERT INTO `tb_city` VALUES ('X', '许昌市');
INSERT INTO `tb_city` VALUES ('Y', '伊犁州');
INSERT INTO `tb_city` VALUES ('Y', '营口市');
INSERT INTO `tb_city` VALUES ('Y', '玉溪市');
INSERT INTO `tb_city` VALUES ('Y', '烟台市');
INSERT INTO `tb_city` VALUES ('Y', '永州市');
INSERT INTO `tb_city` VALUES ('Y', '益阳市');
INSERT INTO `tb_city` VALUES ('Y', '延边州');
INSERT INTO `tb_city` VALUES ('Y', '玉林市');
INSERT INTO `tb_city` VALUES ('Y', '玉树州');
INSERT INTO `tb_city` VALUES ('Y', '云浮市');
INSERT INTO `tb_city` VALUES ('Y', '伊春市');
INSERT INTO `tb_city` VALUES ('Y', '阳江市');
INSERT INTO `tb_city` VALUES ('Y', '榆林市');
INSERT INTO `tb_city` VALUES ('Y', '银川市');
INSERT INTO `tb_city` VALUES ('Y', '宜春市');
INSERT INTO `tb_city` VALUES ('Y', '阳泉市');
INSERT INTO `tb_city` VALUES ('Y', '鹰潭市');
INSERT INTO `tb_city` VALUES ('Y', '扬州市');
INSERT INTO `tb_city` VALUES ('Y', '雅安市');
INSERT INTO `tb_city` VALUES ('Y', '运城市');
INSERT INTO `tb_city` VALUES ('Y', '盐城市');
INSERT INTO `tb_city` VALUES ('Y', '岳阳市');
INSERT INTO `tb_city` VALUES ('Y', '宜宾市');
INSERT INTO `tb_city` VALUES ('Y', '宜昌市');
INSERT INTO `tb_city` VALUES ('Y', '延安市');
INSERT INTO `tb_city` VALUES ('Z', '中山市');
INSERT INTO `tb_city` VALUES ('Z', '珠海市');
INSERT INTO `tb_city` VALUES ('Z', '周口市');
INSERT INTO `tb_city` VALUES ('Z', '驻马店市');
INSERT INTO `tb_city` VALUES ('Z', '昭通市');
INSERT INTO `tb_city` VALUES ('Z', '张家界市');
INSERT INTO `tb_city` VALUES ('Z', '资阳市');
INSERT INTO `tb_city` VALUES ('Z', '湛江市');
INSERT INTO `tb_city` VALUES ('Z', '张家口市');
INSERT INTO `tb_city` VALUES ('Z', '遵义市');
INSERT INTO `tb_city` VALUES ('Z', '肇庆市');
INSERT INTO `tb_city` VALUES ('Z', '舟山市');
INSERT INTO `tb_city` VALUES ('Z', '中卫市');
INSERT INTO `tb_city` VALUES ('Z', '漳州市');
INSERT INTO `tb_city` VALUES ('Z', '张掖市');
INSERT INTO `tb_city` VALUES ('Z', '株洲市');
INSERT INTO `tb_city` VALUES ('Z', '郑州市');
INSERT INTO `tb_city` VALUES ('Z', '淄博市');
INSERT INTO `tb_city` VALUES ('Z', '枣庄市');
INSERT INTO `tb_city` VALUES ('Z', '自贡市');
INSERT INTO `tb_city` VALUES ('Z', '镇江市');

-- ----------------------------
-- Table structure for tb_goods
-- ----------------------------
DROP TABLE IF EXISTS `tb_goods`;
CREATE TABLE `tb_goods`  (
  `GoodsID` int(0) NULL DEFAULT NULL,
  `TypeID` int(0) NULL DEFAULT NULL,
  `GoodsName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Price` double NULL DEFAULT NULL,
  `Introduce` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `KuCun` int(0) NULL DEFAULT NULL,
  `sales` int(0) NULL DEFAULT NULL,
  `showPicture` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `GoodsPicture` varchar(800) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_goods
-- ----------------------------
INSERT INTO `tb_goods` VALUES (1, 1, '可乐', 3, '可乐，快乐水', 15, 10, NULL, NULL);

-- ----------------------------
-- Table structure for tb_goodstype
-- ----------------------------
DROP TABLE IF EXISTS `tb_goodstype`;
CREATE TABLE `tb_goodstype`  (
  `TypeID` int(0) NULL DEFAULT NULL,
  `TypeName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_goodstype
-- ----------------------------
INSERT INTO `tb_goodstype` VALUES (1, '食品，饮料，休闲');
INSERT INTO `tb_goodstype` VALUES (2, '数码，电子，手机，配件');
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);
INSERT INTO `tb_goodstype` VALUES (NULL, NULL);

-- ----------------------------
-- Table structure for tb_member
-- ----------------------------
DROP TABLE IF EXISTS `tb_member`;
CREATE TABLE `tb_member`  (
  `MemberID` int(0) NULL DEFAULT NULL,
  `MemberName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `MemberPwd` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Sex` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `RealName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `MobileTel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ZhiFuPWD` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_member
-- ----------------------------
INSERT INTO `tb_member` VALUES (1, '张xx', '123456', '男', '张三', '13544874455', '12345@qq.com', '郑州二七马寨', '123456');

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order`  (
  `orderID` int(0) NULL DEFAULT NULL,
  `goodsID` int(0) NULL DEFAULT NULL,
  `num` int(0) NULL DEFAULT NULL,
  `orderDate` timestamp(0) NULL DEFAULT NULL,
  `OrderState` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_order
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
