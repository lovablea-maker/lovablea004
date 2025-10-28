import { BookOpen } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Lovable = () => {
  return (
    <CourseLayout
      title="特殊課 - Lovable"
      subtitle="用 Vibe Coding 開外掛 - 一天學會 Lovable + Automation + Agent!"
      icon={BookOpen}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            打造個人專屬無敵網站，輕鬆實現各種創意，省下開發成本的秘密武器
          </p>
        </section>

        <section className="flex gap-4 flex-wrap">
          <a 
            href="#course-intro" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            📖 課程介紹
          </a>
          <a 
            href="https://smart4a.tw/edu/LovableClass.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            📚 課程報名
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">解決方案：Lovable 是什麼？</h2>
          <p className="text-xl font-medium text-primary mb-4">你的全能網站自動化建構系統</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Lovable 是一個革命性的網站生成平台，讓任何人都能在幾分鐘內創建專業級網站。結合 Make/n8n 的自動化能力，以及 Dify 的 AI 智能功能，打造真正的無敵網站生態系統。
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              🏗️ Lovable 核心架構
            </h3>
            <div className="text-center py-4">
              <p className="text-muted-foreground font-medium">
                Lovable 網站生成器 → Make/n8n 自動化引擎 → Dify AI 互動層
              </p>
            </div>
            <p className="text-muted-foreground text-center">
              從網站設計、自動化流程到智能交互，一站式解決所有數位化需求
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-foreground">三大核心優勢</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">免費獲取 Credits</h4>
              <p className="text-muted-foreground leading-relaxed">
                本課程獨家公開！每天免費獲得 100 個 credits 的祕技，一個月就能省下數萬元開發成本。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">全流程整合</h4>
              <p className="text-muted-foreground leading-relaxed">
                從前端視覺設計到後端資料處理，從自動化工作流程到 AI 智慧互動，打造一條龍服務的完整網站。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">零程式碼部署</h4>
              <p className="text-muted-foreground leading-relaxed">
                無需任何程式基礎，使用視覺化介面和拖拉方式即可完成網站從設計到上線的全部流程。
              </p>
            </div>
          </div>
        </section>

        <section id="course-intro">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">課程介紹</h2>
          <p className="text-muted-foreground leading-relaxed">
            帶你從 Lovable 網站生成器出發，結合 Make/n8n 與 Dify，完整體驗 Vibe Coding × 自動化 × AI Agent 協同任務的威力。
            不論你是行銷人、設計師、專案 PM 或創業者，只要掌握這套流程，就能自己打造屬於你的「無敵網站」。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">一天完整學習路徑</h2>
          <p className="text-muted-foreground mb-6">
            從理論到實戰，循序漸進掌握 Vibe Coding × 自動化 × AI Agent 協同任務
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-primary">9:30 - 10:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Vibe Coding 思維導入</h3>
              <p className="text-muted-foreground leading-relaxed">
                了解 Vibe Coding 的核心概念與應用場景，探索如何結合 Lovable、Make/n8n 與 Dify 打造無敵網站。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-primary">10:30 - 11:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lovable 進階功能實戰</h3>
              <p className="text-muted-foreground leading-relaxed">
                深入學習 Lovable 的進階設定、元件系統和互動設計，掌握自定義模板與品牌風格設定。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-primary">11:30 - 12:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Credits 獲取秘技解析</h3>
              <p className="text-muted-foreground leading-relaxed">
                獨家公開 Lovable 每天免費獲得 100 個 credits 的秘技，學習如何優化 credits 使用效率。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30 border border-accent/30">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-accent-foreground">12:30 - 13:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">午餐休息時間</h3>
              <p className="text-muted-foreground leading-relaxed">
                享用精緻午餐，與講師和其他學員交流分享心得與經驗。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-primary">13:30 - 14:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Make/n8n 自動化流程設計</h3>
              <p className="text-muted-foreground leading-relaxed">
                學習設計 Make/n8n 自動化工作流程，實現資料處理、表單提交、用戶追蹤等功能。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-primary">14:30 - 15:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Dify AI Agent 創建與配置</h3>
              <p className="text-muted-foreground leading-relaxed">
                使用 Dify 平台創建智能 AI Agent，為網站增加智能客服、內容推薦等功能。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-lg font-bold text-primary">15:30 - 16:30</span>
                <span className="h-px flex-1 bg-border"></span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">整合實作與成果發表</h3>
              <p className="text-muted-foreground leading-relaxed">
                將所學技能整合應用，完成個人專案實作，並進行成果展示與講師點評。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">你是否正在面對這些困境？</h2>
          <p className="text-muted-foreground mb-6">
            如果你有以下任何一個困擾，這堂課將徹底改變你的工作方式
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">網站開發成本高</h3>
              <p className="text-muted-foreground leading-relaxed">
                找工程師開發網站需花費大量時間和金錢，每次修改內容都要重新委託，效率低下又增加成本負擔。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">工具整合困難</h3>
              <p className="text-muted-foreground leading-relaxed">
                市面上各種工具之間難以串接，導致自動化流程經常中斷，需要人工手動處理，無法實現真正的無縫整合。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">AI 應用複雜</h3>
              <p className="text-muted-foreground leading-relaxed">
                想導入 AI 功能，但不知從何著手，找不到簡單方法將 AI 與現有網站或工作流程整合，導致錯失商機。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">平台使用費用高</h3>
              <p className="text-muted-foreground leading-relaxed">
                各種網站生成平台的 credits 費用高昂，像 Lovable 的使用成本每月動輒上萬，難以長期持續負擔。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">維護耗時費力</h3>
              <p className="text-muted-foreground leading-relaxed">
                網站上線後的更新、調整和維護需要不斷投入時間和精力，分散了你在核心業務上的專注力。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">缺乏技術支持</h3>
              <p className="text-muted-foreground leading-relaxed">
                面對技術問題時找不到合適的解決方案，只能依賴昂貴的顧問服務或花費大量時間自學摸索。
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-8 px-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-foreground">準備好開啟你的 Vibe Coding 之旅了嗎?</h2>
          <p className="text-muted-foreground mb-6">立即報名課程，掌握 Lovable + Automation + Agent 的完整技能</p>
          <a 
            href="https://smart4a.tw/edu/LovableClass.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            📚 立即報名課程
          </a>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Lovable;
