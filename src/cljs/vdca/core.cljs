(ns vdca.core
  (:require [clojure.spec :as spec]
            [goog.dom :as dom]))
  
(def component {:type "ul" :children [
                                      {:type "li" :children ["Hello"]} 
                                      {:type "li" :children ["World!!!"]}]})

(def component2 {:type "ul" :children [{:type "li" :children ["Hello"]}
                                       {:type "li" :children ["World!"]}]})
                                       
                                      
(defn create-element
  [node]
  (if (string? node)
    (.createTextNode js/document node)
    (let [el (.createElement js/document (:type node))]
      (doseq [child (map create-element (:children node))]
        (when child (dom/appendChild el child)))
      el)))
        
(defn changed?
  [node1 node2]
  (or (not= (type node1) (type node2))
      (and (string? node1) (not= (compare node1 node2) 0))
      (not= (:type node1) (:type node2))))

(defn update-element!
  ([parent new-node] (update-element! parent new-node nil 0))
  ([parent new-node old-node] (update-element! parent new-node old-node 0))
  ([parent new-node old-node index]
   (cond 
     (not old-node) (dom/appendChild parent (create-element new-node))
     (not new-node) (.removeChild parent (aget (.-childNodes parent) index))
     (changed? new-node old-node) (dom/replaceNode (create-element new-node) (aget (.-childNodes parent) index))
     (:type new-node) (let [new-length (count (:children new-node))
                            old-length (count (:children old-node))]
                        (doseq [i (range 0 (max new-length old-length))]
                          (update-element! 
                            (aget (.-childNodes parent) index)
                            (get (:children new-node) i)
                            (get (:children old-node) i)
                            i))))))
     
(defn init []
  (let [root (dom/getElement "root")
        reload (dom/getElement "reload")
        element (create-element component)
        test (type "hello")]
    (update-element! root component)
    (.addEventListener reload "click" #(update-element! root component2 component))))

(init)

