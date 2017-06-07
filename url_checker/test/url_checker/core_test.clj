(ns url_checker.core-test
  (:require [clojure.test :refer :all]
            [url_checker.core :refer :all]))

(deftest isValid-test
  (is (true? (isValid? "https://attendify.com")))
  (is (true? (isValid? "http://attendify.com")))
  (is (true? (isValid? "ftp://attendify.com")))
  (is (false? (isValid? "htttp://attendify.com")))
  (is (false? (isValid? "qhttp://attendify.com")))
  (is (false? (isValid? "ppp://attendify.com"))))

(deftest isActive?-test
   (is (true? (isActive? "https://attendify.com")))
   (is (true? (isActive? "https://www.google.com")))
   (is (true? (isActive? "https://dribbble.com/")))
   (is (nil? (isActive? "https://attendifyak.com")))
   (is (nil? (isActive? "https://www.goog.cominvalid")))
   (is (nil? (isActive? "https://attendify.rzzz"))))

(deftest request-to-keyparams-test
  (let [rtk request-to-keyparams]
   (is (= {:param1 "7", :param2 "seven", :a "1", :b "2"}
        (rtk "http://www.example.com/?param1=7&param2=seven&a=1&b=2")))
   (is (= {:param1 "7", :param2 "seven"}
        (rtk "http://www.example.com/?param1=7&param2=seven")))
   (is (= {:pa1 "7"}(rtk "http://www.example.com/?pa1=7")))))
